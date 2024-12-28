# tokyo-to-osaka-action

Joke action: Visualize CI/CD time to line from Tokyo to Osaka on geojson

![スクリーンショット 2024-12-28 16 33 26](https://gist.github.com/user-attachments/assets/f7aa55d0-2f4a-4b83-a6f4-5afd09f71731)

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
