## Web performance audits

```sh
# 1. Start the containers with graphite and grafana.
docker-compose up -d
# 2. Run the performance tests.
npm run performance:test
# 3. Open UI performance report.
npm run performance:open
# 4. Tear down the containers when you've had enough.
docker-compose stop
```
