## spatialactivism.org

### get started:

- `npm install`
- `npm start`
- go to http://localhost:8082

### deploy to spatialactivism.org

Any pushed changes to the `deploy` branch gets automagically pushed to spatialactivism.org:

- do things in master, commit, push
- `git checkout deploy`
- `git merge master`
- `git commit -am 'deploy message here'`
- `git push`
- http://www.spatialactivism.org should have been updated.
- remember to switch back to the master branch with `git checkout master`!

(if `git push` doesn't work, try `git push --set-upstream origin deploy`)
