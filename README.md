# tokyo-to-osaka-action

Joke action: Visualize CI/CD time to line from Tokyo to Osaka on geojson

![スクリーンショット 2024-12-28 16 33 26](https://github.com/user-attachments/assets/908e14e5-36fa-498c-bd5b-85e4db5b2ab0)


# Usage

```yaml
name: CI/CD time to line from Tokyo to Osaka
on:
  workflow_dispatch:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      
      # ... long CI/CD ...

      - uses: uta8a/tokyo-to-osaka-action@latest
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
