# Playwright Test Automation Framework

Production-ready test automation framework built with Playwright and TypeScript.

Designed to reflect real-world QA engineering practices, including scalable architecture, environment-based execution, and CI stability strategies.

This project represents my approach to building maintainable automation systems, not just writing tests.

---

## Overview

This framework demonstrates how to design scalable, maintainable, and environment-aware test automation for modern web applications.

It is structured using:
- Page Object Model (POM)
- Service layer for API interactions
- Environment-based configuration
- Authentication reuse via storage state
- CI integration with GitHub Actions

---

## Architecture

tests/
→ Test cases (UI, API, combined)

pages/
→ UI abstraction (Page Object Model)

services/
→ API layer (separation of concerns)

fixtures/
→ Custom test setup and shared context

config/
→ Environment configuration (dev, staging)

---

## Features

- UI testing (Playwright)
- API testing (Playwright request)
- Combined UI + API validation
- Environment switching via ENV
- Auth session reuse (storageState)
- CI pipeline (GitHub Actions)
- Parallel execution support

---

## Environment Handling

Run tests against different environments:

```bash
npx playwright test
ENV=staging npx playwright test