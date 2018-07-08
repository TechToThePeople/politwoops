mysql politwoops < sql/csv.sql
mv data/tmp/*.csv data
gzip data/*.csv
