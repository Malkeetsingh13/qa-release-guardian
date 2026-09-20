[![QA Release Gate](https://github.com/Malkeetsingh13/qa-release-guardian/actions/workflows/qa-release-gate.yml/badge.svg)](https://github.com/Malkeetsingh13/qa-release-guardian/actions/workflows/qa-release-gate.yml)
[![Cypress](https://img.shields.io/badge/Cypress-16.x-17202C?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)

# QA Release Guardian

A Cypress + JavaScript QA automation framework that validates application quality across UI, API, regression, and release-readiness checks.

The project demonstrates a practical QA/SDET approach where automated tests are integrated into a release gate and executed automatically through GitHub Actions.

---

## 🎯 Project Objective

QA Release Guardian is designed to answer one key question:

> **Is the application ready to release?**

The framework combines multiple automated test layers and produces a clear release decision:

```text
UI Smoke Tests
       ↓
API Tests
       ↓
Critical Regression
       ↓
Release Gate
       ↓
┌─────────────────────┐
│ RELEASE READY       │
│        OR           │
│ RELEASE BLOCKED     │
└─────────────────────┘