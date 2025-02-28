
# 🧪 Sparta Merrill Sales Artifacts - Testing Guide

This guide provides instructions for running tests, updating snapshots, and managing linting in the **Sparta Merrill Sales Artifacts** project.

---

## ✅ **1. Running Tests**
To execute all test cases, run:
```sh
npm run test
```

### 🎯 **Run Tests with Coverage**
To generate a test coverage report:
```sh
npm run test-coverage
```
This command runs tests using `c8` and provides a coverage report.

---

## 🔄 **2. Updating Snapshots**
If you need to delete and regenerate snapshot files before running tests:
```sh
npm run update-snapshot
```
This will:
1. **Delete all `snapshots` folders** inside `test/` directories.
2. **Run the test suite** to regenerate snapshots.

> **Note:** The cleanup is handled by `deleteSnapshots.mjs` located inside `components/wealth-shared/helpers/`.

---

## 🚀 **3. Skipping Linting During Commit**
Linting is enforced using **husky** and **lint-staged**.  
To **bypass linting checks** during a commit, use the `--no-verify` flag:

```sh
git commit -m "Your commit message" --no-verify
```

This skips **pre-commit hooks** like `eslint --fix` and `husky`.

---

## 🔍 **4. Manually Running Linting**
To manually lint and fix issues:
```sh
npm run lint
```

To automatically fix linting errors, run:
```sh
npx eslint --fix .
```

---

## 🔕 **5. Skipping Tests in a Specific Run**
### 🛑 **Skip Running Tests on Commit**
To commit code without running tests:
```sh
git commit -m "Your commit message" --no-verify
```

### ⏩ **Skip a Specific Test in Code**
Modify a test using `.skip` to prevent it from running:

```js
test.skip("should render div tag", () => {
  // Test logic here
});
```

For Jest:
```js
it.skip("should render div tag", () => {
  // Test logic here
});
```

---

## 🎯 **6. Running Specific Tests**
### ✅ **Run a Single Test by Name**
```sh
npm test -- -t "test name"
```

### 🎯 **Run Only a Specific Test Inside a File**
Modify the test using `.only`:
```js
test.only("should render div tag", () => {
  // Test logic here
});
```

---

## 🐞 **7. Debugging Tests**
Run tests with debugging enabled:
```sh
node --inspect-brk node_modules/.bin/jest --runInBand
```

This allows you to debug failing test cases.

---

## 📌 **8. Contributing Guidelines**
- Follow the testing standards.
- Ensure all tests pass before creating a pull request.
- Use proper commit messages when updating snapshots.

---

## 🛠 **9. Troubleshooting**
### ❌ **Test Fails Due to Missing Snapshots**
If a test fails because snapshots are missing, run:
```sh
npm run update-snapshot
```
This will delete outdated snapshots and regenerate them.

---

## 🏁 **10. Summary of Commands**
| **Action**                        | **Command**                                  |
|------------------------------------|----------------------------------------------|
| Run all tests                      | `npm run test`                              |
| Run tests with coverage            | `npm run test-coverage`                     |
| Update snapshots & run tests       | `npm run update-snapshot`                   |
| Skip linting in commit             | `git commit -m "msg" --no-verify`           |
| Run linter manually                | `npm run lint`                              |
| Run only one test                  | `npm test -- -t "test name"`                |
| Debug tests                        | `node --inspect-brk node_modules/.bin/jest --runInBand` |

---

This `README.md` ensures **everyone on your team** can run and debug tests efficiently! 🚀  
Let me know if you need any modifications. 😊
