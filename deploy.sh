#!/usr/bin/env bash
set -euo pipefail

BLUE=$(printf '\033[36m')
NORMAL=$(printf '\033[m')

timestamp=$(node -e "console.log(new Date().toISOString())")
gh_pages_args=(--dist out --dotfiles --message "Update ${timestamp}")

log_and_run_cmd () {
  echo -e "+ ${BLUE}$*${NORMAL}"
  "$@"
  echo
}

build_static_site () {
  local base_path="$1"

  if [[ -n "$base_path" && "$base_path" != /* ]]; then
    base_path="/$base_path"
  fi

  log_and_run_cmd env NEXT_BASE_PATH="$base_path" NEXT_PUBLIC_BASE_PATH="$base_path" npm run build:static
}

publish_site () {
  local branch="$1"
  local repo="$2"

  if [[ -z "$repo" ]]; then
    repo=$(git config --get remote.origin.url)
  fi

  log_and_run_cmd npx gh-pages "${gh_pages_args[@]}" --branch "$branch" --repo "$repo"
}

deploy_event () {
  local base_path="/2026"
  local repo="${EVENT_REPO:-}"

  build_static_site "$base_path"
  rm -f out/CNAME
  publish_site "gh-pages" "$repo"
}

deploy_homepage () {
  local repo="${HOMEPAGE_REPO:-git@github.com:HackTJ/hacktj.github.io.git}"
  local domain="${HOMEPAGE_DOMAIN:-hacktj.org}"

  build_static_site ""
  if [[ -n "$domain" ]]; then
    printf '%s\n' "$domain" > out/CNAME
  else
    rm -f out/CNAME
  fi
  publish_site "main" "$repo"
}

case "${1:-event}" in
  event)
    deploy_event
    ;;
  homepage)
    deploy_homepage
    ;;
  all)
    deploy_event
    deploy_homepage
    ;;
  *)
    echo "Usage: ./deploy.sh [event|homepage|all]"
    exit 1
    ;;
esac
