var Twitterify = {
    options:{    // requires  platform.twitter.com/widgets.js
        replyUrl : "https://twitter.com/intent/tweet?in_reply_to={{ID}}",
        retweetUrl : "https://twitter.com/intent/retweet?tweet_id={{ID}}",
        favUrl : "https://twitter.com/intent/favorite?tweet_id={{ID}}",
        hashLink : "https://twitter.com/hashtag/{{ID}}?src=hash",
        standardLink : "https://twitter.com/intent/favorite?tweet_id={{ID}}",
        atLink : "https://twitter.com/intent/favorite?tweet_id={{ID}}"
    },
    init: function(tweets) {
        var self = this;
        var store;
        for(var i = 0; i < tweets.length;i++) {
            tweets[i].text = self.createLinks(tweets[i].text);
        }
        return tweets;
    },
    createLinks: function(tweet) {
        var self = this;
        tweet = self.hashLink(tweet);
        tweet = self.standardLink(tweet);
        tweet = self.atLink(tweet);
        return tweet;
    },
    hashLink: function(tweet) {  // make hashtag links
        var self = this;
        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
            return before + '<a target="_blank" class="twtr-hashtag" href="' + self.options.hashLink.replace(/\{\{ID\}\}/,hash) + '">#' + hash + '</a>';
        });
    },
    standardLink: function(tweet) { // make standard links
        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
            var http = m2.match(/w/) ? 'http://' : '';
            return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
        });
    },
    atLink: function(tweet){  // make @links
        return tweet.replace(/\B[@ďź ]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
            return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
        });
    }
};
