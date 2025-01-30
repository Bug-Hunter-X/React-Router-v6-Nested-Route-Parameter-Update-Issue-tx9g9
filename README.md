# React Router v6 Nested Route Parameter Update Issue

This repository demonstrates a common issue encountered when working with nested routes and parameters in React Router v6.  The problem occurs when navigating between nested routes that share the same parent route, where parameters fail to update causing stale props within the child components.

## Problem Description

When you navigate between routes with different parameters within the same parent route, the child component's parameter values may not refresh automatically. The child component remains rendered with the old parameter values leading to unexpected behavior.

## Solution

The solution is to use the `useLocation` hook to force a re-render of the child component whenever the URL changes within the parent route, ensuring the component receives the updated parameter values.

## Setup

Clone the repository and run:

```bash
npm install
npm start
```