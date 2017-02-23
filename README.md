## spatialactivism.org

### get started:

- `npm install -g bower`
- `bower install`
- `python -m SimpleHTTPServer`
- go to http://localhost:8080

### deploy to spatialactivism.org

Any pushed changes to the `deploy` branch gets automagically pushed to spatialactivism.org:

- do things in master, commit, push
- `git checkout deploy`
- `git merge master`
- `git commit -am 'deploy message here'`
- `git push`
- http://www.spatialactivism.org should have been updated.

(if that last one doesn't work, try `git push --set-upstream origin deploy`)
