 select * from deleted_tweets into outfile '/var/www/mepwatch/data/tmp/deleted_tweets.csv';
 select * from tweets into outfile '/var/www/mepwatch/data/tmp/tweets.csv';
