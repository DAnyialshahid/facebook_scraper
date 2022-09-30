
import axios from 'axios';
import qs from 'qs';
import db from './database.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 3000


var fb_user = '100073144826134';
var cookie = 'sb=9_VOYazehgTGfWewd_cO2JwQ; datr=7xZnYWTnJrRyggbdrhfb3ctG; c_user=100073144826134; xs=43%3AS5Qsd7y1OF_VbA%3A2%3A1634329274%3A-1%3A5944%3A%3AAcWApmswKXP1Ev1JFsbCG-E7ADQYOmX1RYriH5o6_RU; fr=02PRo5hBv5T9B3Cz5.AWV4dYmye5dRbE-Zd1EEnuddBzQ.BjL3UX.6r.AAA.0.0.BjL3UX.AWVTdOp3-Mg; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1664058181243%2C%22v%22%3A1%7D';


var headers = {
    'authority': 'www.facebook.com',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    // 'cookie': 'sb=_awsY4H_1H5YyWQpxBEdc8vL; datr=_awsY_J9sATqZCHBILllTNWt; locale=en_GB; c_useruser xs=44%3AZV0x-ZObLW3DdA%3A2%3A1663872302%3A-1%3A-1%3A%3AAcXLqExXX0A1jz2m5hgJtITEQzvY2Xaqnyuk-IScEw; fr=096Si8lR2awwbIiPh.AWVn0agLaSGmXvSrXajfjvmFDHs.BjLque.Re.AAA.0.0.BjLque.AWUiRUek0ys; m_page_voiceuser m_pixel_ratio=1; x-referer=eyJyIjoiL3Byb2ZpbGUucGhwP2lkPTEwMDA3MzE0NDgyNjEzNCZ2PWluZm8mbHN0PTEwMDA4NTY3NzE0NzQ0OCUzQTEwMDA3MzE0NDgyNjEzNCUzQTE2NjQwMDI5OTEmZWF2PUFmYVhXaG42YTh3YVd0UWlPX0tHYmFyLXhTamEwa21tUEtuWnhSR1BlZk1FVTNVV3lWbDExSTM3NzlER2oxenlscW8mcGFpcHY9MCIsImgiOiIvcHJvZmlsZS5waHA%2FaWQ9MTAwMDczMTQ0ODI2MTM0JnY9aW5mbyZsc3Q9MTAwMDg1Njc3MTQ3NDQ4JTNBMTAwMDczMTQ0ODI2MTM0JTNBMTY2NDAwMjk5MSZlYXY9QWZhWFdobjZhOHdhV3RRaU9fS0diYXIteFNqYTBrbW1QS25aeFJHUGVmTUVVM1VXeVZsMTFJMzc3OURHajF6eWxxbyZwYWlwdj0wIiwicyI6Im0ifQ%3D%3D; wd=1663x949; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1663999248443%2C%22v%22%3A1%7D',
    'cookie': cookie,
    'origin': 'https://www.facebook.com',
    'sec-ch-prefers-color-scheme': 'dark',
    'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
    'viewport-width': '1680',
    'x-fb-friendly-name': 'ProfileCometAboutAppSectionQuery',
    'x-fb-lsd': '1F_eaMVnzDahpANwl3T1r7'
}

function user_info(id) {

    var config = {
        method: 'post',
        url: 'https://www.facebook.com/api/graphql/',
        headers: headers,
        data: ''
    };


    return new Promise((s, f) => {
        config.data = qs.stringify({
            'av': fb_user,
            '__user': fb_user,
            '__a': '1',
            '__dyn': '7AzHxqU5a5Q1ryUqxenFw9uu2i5U4e0ykdwSwAyUco5S3O2S7o762S1DwUx60p-0LVEtwMw65xO2O1Vwwwqo465o-cw5MKdwGxu782lwv89kbxS2218wc61axe3S1lwlE-UqwsUkxe2GewyDwkUtxGm2SUbElxm3y11xfxmu3W3y1MBx_y88E3qxWm2Sq2-azo2NwwwOg2cwMwiU8UdUcobUak',
            '__csr': 'glAlSIKzjsQCDiPp2vTlcgLZnJ8K_Wp2dmAAOdFRWicQHmTAKhqnkCF9pW-nyJ6Gha_AByrxirWQbKm8yFC4VFryJ5Cz-4Q8Vu217y9XwDhEiyqKax6mu2a2WaUoyoiyEnwVwzWDwwyF8S8x22emim58a8uCxe8xG5qwJwo84i0w8aUG4U887-3Gum2a9wJwCwi86q2ybDx63G1Pwwxnx-awTwyw4sw2GU05s600DWE0oWg18o0HW1pw6uw1-Zw1V605n80c7U1Q80hMw5Vw7Bw',
            '__req': '1d',
            '__hs': '19259.HYP:comet_pkg.2.1.0.2.1',
            'dpr': '1',
            '__ccg': 'GOOD',
            '__rev': '1006266350',
            '__s': 'ndbr33:a5phgo:vhq02o',
            '__hsi': '7146844621191561917',
            '__comet_req': '15',
            'fb_dtsg': 'NAcPwa1RGyA0u8YAbkKYmBcmPIkjqI7Wak9OMvhlFkhI7Dizm-L28sA:44:1663872302',
            'jazoest': '25452',
            'lsd': '1F_eaMVnzDahpANwl3T1r7',
            '__spin_r': '1006266350',
            '__spin_b': 'trunk',
            '__spin_t': '1664004433',
            'fb_api_caller_class': 'RelayModern',
            'fb_api_req_friendly_name': 'ProfileCometAboutAppSectionQuery',
            'variables': '{"UFI2CommentsProvider_commentsKey":"ProfileCometAboutAppSectionQuery","appSectionFeedKey":"ProfileCometAppSectionFeed_timeline_nav_app_sections__AQHRGa6sngvWx-2S5Uk-SwuDXnftvYWXzTYW746ivEbTxgtZW0dHF2nXfQEDpI8F0GbmflSQFagWaIRqSzNxmw--1gUdkd0hIf-ir-KNlwW7FPs","collectionToken":null,"pageID":"' + id + '","rawSectionToken":"AQHRGa6sngvWx-2S5Uk-SwuDXnftvYWXzTYW746ivEbTxgtZW0dHF2nXfQEDpI8F0GbmflSQFagWaIRqSzNxmw--1gUdkd0hIf-ir-KNlwW7FPs","scale":1,"sectionToken":"YXBwX3NlY3Rpb246MTAwMDczMTQ0ODI2MTQwOjIzMjcxNTgyMjc=","showReactions":true,"userID":"' + id + '","__relay_internal__pv__FBReelsEnableDeferrelayprovider":true,"__relay_internal__pv__FBReelsDisableBackgroundrelayprovider":false,"__relay_internal__pv__FBReelsShowOverflowMenuInFeedbackBarrelayprovider":false}',
            'server_timestamps': 'true',
            'doc_id': '5227506367346707'
        });
        axios(config)
            .then(function (response) {
                var c = response.data.split("\n");
                s(response.data);
                var a = JSON.parse(c[0]);
                var b = JSON.parse(c[1]);
                var data = {
                    data: {
                        length: c.length,
                        id: b.data.id,
                        node_id: b.data.timeline_nav_app_sections.edges[0].node.id,
                        node_name: b.data.timeline_nav_app_sections.edges[0].node.name,
                    }, a: a, b: b
                };
                s(data);
                console.log('Sended');
            })
            .catch(function (error) {
                console.log(error);
                f(error);
            });


    });

}
function get_user_about_graphql(id, navigator) {
    // if(navigator.location=='about_overview'){
    //     navigator.collectionToken=null;
    // }
    var data = qs.stringify({
        'av': '100073144826134',
        '__user': '100073144826134',
        '__a': '1',
        '__dyn': '7AzHJ16U9ob8ng5K8G6EjBWo2nDwAxu13w8CewSwMwNwnof8boG4E762S1DwUx60GE3Qwb-q7oc81xoswIK1Rwwwqo465o-cw5MKdwGxu782lwv89kbxS2218wc61axe3S1lwlE-UqwsUkxe2GewyDwkUtxGm2SUbElxm3y11xfxmu3W3y261eBx_y88E3qxWm2Sq2-azo2NwwwOg2cwMwhF8-4UdUcobUak',
        '__csr': 'gqYn6N6zOIRsD48D9lPiOsZjjh4HiaIDRO9Zjh5BOlmDdrGZFcxqcBFkiZFqL88iyaqh5y-njF4y8yQjCKcAG8zK_mi8ynnyoqz8lDxaq8Cx6iEhy8SfG5UGmuumuucK9wxK5FU9o9azm3-58KmexGezUF0FyU-E8k1fBwAwHwjpU422SA2q2u3a58hw8O2O5U4C2S1gwm84O3yEfEc8cEG26cCwKwtUy05gE0sFw308036Kw0xxw5fwdu0M40235w1qi07vo0cBo1M80hMx60sG781QE',
        '__req': '1z',
        '__hs': '19259.HYP:comet_pkg.2.1.0.2.1',
        'dpr': '1',
        '__ccg': 'EXCELLENT',
        '__rev': '1006266754',
        '__s': '5wjtuc:ti8wj5:7t6giv',
        '__hsi': '7147062540252013064',
        '__comet_req': '15',
        'fb_dtsg': 'NAcOw62yqBVJR9-0yW_UiKolObTHY9vN1u5jOidVRyFZll_XVlPIWWw:43:1634329274',
        'jazoest': '25535',
        'lsd': 'ZvDUJwMsi6zkKs9hpbqL5q',
        '__spin_r': '1006266754',
        '__spin_b': 'trunk',
        '__spin_t': '1664055171',
        'fb_api_caller_class': 'RelayModern',
        'fb_api_req_friendly_name': 'ProfileCometAboutAppSectionQuery',
        'variables': '{"UFI2CommentsProvider_commentsKey":"ProfileCometAboutAppSectionQuery","appSectionFeedKey":"ProfileCometAppSectionFeed_timeline_nav_app_sections__AQHRMPI3YFKZCJs69h5tAaKw7WVbPaqDIRzcQvkfIzcbE6ApoYhCqTnkxTXFT5U3CNnfXP-9y1HlwXPfKt-a2U6d0fpjTSLLQqdqyW7pECMlTiM","collectionToken":"' + navigator.collectionToken + '","pageID":"' + id + '","rawSectionToken":"' + navigator.rawSectionToken + '","scale":1,"sectionToken":"' + navigator.sectionToken + '","showReactions":true,"userID":"' + id + '","__relay_internal__pv__FBReelsEnableDeferrelayprovider":true,"__relay_internal__pv__FBReelsDisableBackgroundrelayprovider":false,"__relay_internal__pv__FBReelsShowOverflowMenuInFeedbackBarrelayprovider":false}',
        'server_timestamps': 'true',
        'doc_id': '5227506367346707'
    });
    var config = {

        method: 'post',
        url: 'https://www.facebook.com/api/graphql/',
        headers: {
            'authority': 'www.facebook.com',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded',
            'cookie': cookie,
            'origin': 'https://www.facebook.com',
            'referer': 'https://www.facebook.com/profile.php?id=' + fb_user + '&sk=about_contact_and_basic_info',
            'sec-ch-prefers-color-scheme': 'dark',
            'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            'viewport-width': '1680',
            'x-fb-friendly-name': 'ProfileCometAboutAppSectionQuery',
            'x-fb-lsd': 'ZvDUJwMsi6zkKs9hpbqL5q'
        },
        data: data
    };

    return new Promise((s, f) => {

        axios(config)
            .then(function (response) {
                // var c = response.data.split("\n");

                s(response.data);
                console.log('Sended');
            })
            .catch(function (error) {
                console.log(error);
                f(error);
            });


    });

}
function get_friends_page(id) {


    var config = {
        method: 'get',
        url: 'https://www.facebook.com/profile.php?id=' + id + '&sk=friends',
        headers: {
            'authority': 'www.facebook.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'cookie': cookie,
            'cp-extension-installed': 'Yes',
            'sec-ch-prefers-color-scheme': 'dark',
            'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'viewport-width': '1680'
        }
    };

    return new Promise((s, f) => {

        axios(config)
            .then(function (response) {
                // var c = response.data.split("\n");

                s(response.data);
                console.log('Sended');
            })
            .catch(function (error) {
                console.log(error);
                f(error);
            });


    });

}
function get_friends_graphql(collection_id, cursor) {
    var data = qs.stringify({
        'av': '' + fb_user + '',
        '__user': '' + fb_user + '',
        '__a': '1',
        '__dyn': '7AzHJ16U9ob8ng5K8G6EjBWo2nDwAxu13w8CewSwMwNwnof8boG4E762S1DwUx60GE3Qwb-q7oc81xoswIK1Rwwwqo465o-cw5MKdwGxu782lwv89kbxS2218wc61axe3S1lwlE-UqwsUkxe2GewyDwkUtxGm2SUbElxm3y11xfxmu3W3y261eBx_y88E3qxWm2Sq2-azo2NwwwOg2cwMwhF8-4UdUcobUak',
        '__csr': 'glPR7N2ayNq4hyOEZR4iiiEn8LqERjRFJilYOdn9RbiuBq44gzQTbQtivWyqFQtp4GmUjVprAyah8GWQmfG8KbGFEiyVXzUCui9Cz8-FGwyBx6eyE-8jwTxF3EjzF8OdCxe9xi6UvxKm2m598jy84y7-6Aqewg8y1nwsbGE-782xw_wUwUyEe86C3-E5G0zU9od8984Wq3G6Hw18e024600QMU0opg18o0HW1pw6uw1rO08Oo0uvw1PW02y-0t204A81mo1S8',
        '__req': '1e',
        '__hs': '19259.HYP:comet_pkg.2.1.0.2.1',
        'dpr': '1',
        '__ccg': 'MODERATE',
        '__rev': '1006266499',
        '__s': 'gndyu6:ti8wj5:581oik',
        '__hsi': '7146883189028967918',
        '__comet_req': '15',
        'fb_dtsg': 'NAcPuEvVpbsdnevONWaOsmrN7FDVYVUEnEnm053ctLB4lUhEZRhGOkw:43:1634329274',
        'jazoest': '25627',
        'lsd': 'k1DjMHgxHagcOexOXW--gc',
        '__spin_r': '1006266499',
        '__spin_b': 'trunk',
        '__spin_t': '1664013413',
        'fb_api_caller_class': 'RelayModern',
        'fb_api_req_friendly_name': 'ProfileCometAppCollectionListRendererPaginationQuery',
        'variables': '{"count":8,"cursor":"' + cursor + '","scale":1,"search":null,"id":"' + collection_id + '"}',
        'server_timestamps': 'true',
        'doc_id': '8809153699110262'
    });
    var config = {
        method: 'post',
        url: 'https://www.facebook.com/api/graphql/',
        headers: {
            'authority': 'www.facebook.com',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded',
            'cookie': cookie,
            'origin': 'https://www.facebook.com',
            'sec-ch-prefers-color-scheme': 'dark',
            'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            'viewport-width': '1680',
            'x-fb-friendly-name': 'ProfileCometAppCollectionListRendererPaginationQuery',
            'x-fb-lsd': 'k1DjMHgxHagcOexOXW--gc'
        },
        data: data
    };


    return new Promise((s, f) => {


        axios(config)
            .then(function (response) {
                console.log('Cursor', cursor);
                s(response.data);
                // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });




    });

}


async function get_colltion_id_of_about_Section_using_navigator(id, location = 'about_life_events', url = null) {
    var data = qs.stringify({
        'client_previous_actor_id': '' + fb_user + '',
        'route_url': url ?? '/profile.php?id=' + id + '&sk=' + location + '',
        'routing_namespace': 'fb_comet',
        '__user': '' + fb_user + '',
        '__a': '1',
        '__dyn': '7AzHJ16U9ob8ng5K8G6EjBWo2nDwAxu13w8CewSwMwNwnof8boG4E762S1DwUx60GE3Qwb-q7oc81xoswIK1Rwwwqo465o-cw5MKdwGxu782lwv89kbxS2218wc61axe3S1lwlE-UqwsUkxe2GewyDwkUtxGm2SUbElxm3y11xfxmu3W3y261eBx_y88E3qxWm2Sq2-azo2NwwwOg2cwMwhF8-4UdUcobUak',
        '__csr': 'gqYn6N6zOIRsD48D9ddb9PRdd4iJ8GdZsyvkQhpsBlFPmWLqj8-z9ql4LqmHO24EyCAhoLBQWh8y8J4VHz9ay8XLRADgBRUC6EO5pUiCy9EhAGfUydzWxuaBDDBDDzbyo8rxqu2m2iERw_xibBzEqzE-agaoKfG250jVo98aU4Su10wJF0CwDwOxi4o2cwIxu19wJwk85y1cwUG3W323aawxz9EbE7u8w1ka07ao0M200NHE08oo1jU3nwc100wNo0mAw1TS039m0s204s8hw7axO0ta',
        '__req': '3a',
        '__hs': '19259.HYP:comet_pkg.2.1.0.2.1',
        'dpr': '1',
        '__ccg': 'EXCELLENT',
        '__rev': '1006266754',
        '__s': 'cfsrkx:ti8wj5:7t6giv',
        '__hsi': '7147062540252013064',
        '__comet_req': '15',
        'fb_dtsg': 'NAcOw62yqBVJR9-0yW_UiKolObTHY9vN1u5jOidVRyFZll_XVlPIWWw:43:1634329274',
        'jazoest': '25535',
        'lsd': 'ZvDUJwMsi6zkKs9hpbqL5q',
        '__spin_r': '1006266754',
        '__spin_b': 'trunk',
        '__spin_t': '1664055171'
    });
    var config = {
        method: 'post',
        url: 'https://www.facebook.com/ajax/navigation/',
        headers: {
            'authority': 'www.facebook.com',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded',
            'cookie': cookie,
            'origin': 'https://www.facebook.com',
            'referer': 'https://www.facebook.com/profile.php?id=' + id + '&sk=' + location + '',
            'sec-ch-prefers-color-scheme': 'dark',
            'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            'viewport-width': '1680',
            'x-fb-lsd': 'ZvDUJwMsi6zkKs9hpbqL5q',
            'x-fb-qpl-active-flows': '931594241'
        },
        data: data
    };

    return new Promise((s, f) => {


        axios(config)
            .then(async function (response) {
                console.log('navigating to ', location + ' => ' + id + ' ' + (url ? 'Redirected' : ''));
                var res = response.data.replace('for (;;);', '');
                res = JSON.parse(res);
                res = res.payload.payload;
                if (res.error) {
                    f(res.error)
                } else {
                    if (res.result.type == 'route_redirect') {
                        s(await get_colltion_id_of_about_Section_using_navigator(id, location, res.result.redirect_url));
                    } else {
                        res = res.result.exports.rootView.props;
                        res.location = location;
                        s(res);
                    }

                }

                // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });




    });

}

async function get_friends_by_id(id) {
    await get_friends_page(id).then(async (r) => {

        // res.send(r);

        var finded = /<script .*ProfileCometTopAppSection_feed_info.*?<\/script>/.exec(r);

        if (finded[0]) {
            var d = finded[0].replace(/<script.*sjs?>/, '');
            d = d.replace(/<\/script>/, '');
            d = JSON.parse(d);
            d = d.require[0][3][0]['__bbox']['require'];
            d = d.filter((v) => { if (v[0] == 'RelayPrefetchedStreamCache') { return true; } })

            d = d[0][3][1]['__bbox'];
            d = d['result']['data']['node'];
            // console.log('dd',d)
            var all_collections = d['all_collections']['nodes'];
            if (!all_collections.length) {
                console.log('Status', 'No Friends Found')
                return { code: 0, message: 'No Friends Found' };
            }
            // res.send(JSON.stringify(all_collections)); return ;
            var first_collection_name = all_collections[0] && all_collections[0].style_renderer && all_collections[0].style_renderer.collection.name;
            var first_collection_id = all_collections[0] && all_collections[0].style_renderer && all_collections[0].style_renderer.collection.id;
            // ,data:all_collections[0].style_renderer
            var data = {
                sectionToken: d['variables'] && d['variables']['sectionToken'],
                first_collection_name: first_collection_name,
                first_collection_item_counts: all_collections[0] && all_collections[0].style_renderer && all_collections[0].style_renderer.collection.items.count,
                first_collection_item_page_info: all_collections[0] && all_collections[0].style_renderer && all_collections[0].style_renderer.collection.pageItems.page_info,
                // first_collection_data:all_collections[0],
                //    data:d['result']['data'],
            }
            var friends = [];
            await saveFriends(friends, first_collection_id, all_collections[0].style_renderer.collection.pageItems);
            //    return (JSON.stringify(friends));
            return { code: 200, message: 'Friends Not  Found', data: friends };
        } else {
            return { code: 0, message: 'Friends Not  Found' };

        }

        // console.log(finded[0])
    });

    return { code: 0, message: 'Null' };
}




async function get_user_about_by_id(id, navigator) {
    var user = await db.user.where('fb_id', id).fetch();

    if (navigator.location == 'about_work_and_education') { user.set('work_and_education_status', 'progress'); }
    if (navigator.location == 'about_places') { user.set('places_status', 'progress'); }
    if (navigator.location == 'about_contact_and_basic_info') { user.set('contact_and_basic_info_status', 'progress'); }
    if (navigator.location == 'about_family_and_relationships') { user.set('family_and_relationships_status', 'progress'); }
    if (navigator.location == 'about_details') { user.set('details_status', 'progress'); }
    if (navigator.location == 'about_life_events') { user.set('life_events_status', 'progress'); }
    if (navigator.location == 'about_overview') { user.set('overview_status', 'progress'); }
    await user.save();



    var r = await get_user_about_graphql(id, navigator);
    console.log('navigator', navigator)
    // console.log('data',r)
    //    await get_user_about_graphql(id).then(async (r)=>{


    if (navigator.location == 'about_work_and_education') {
        user.set('work_and_education_status', 'progress');    await user.save();

        var res = JSON.parse(r.split("\n")[0]).data;
        var about_work_and_education = res.user.about_app_sections.nodes[0].activeCollections.nodes[0];

        about_work_and_education = about_work_and_education.style_renderer.profile_field_sections;

        if (!about_work_and_education) {
            user.set('work_and_education_status', 'not_found');
            await user.save();
            return { success: 'failed', code: 0, message: 'Not found work_and_education_status' };
        }

        var about_work_and_education_set = [];

        for await (var section of about_work_and_education) {

           var sec = section.profile_fields.nodes;
  
            for await (var v of sec) {

                var data = { field_type: v.field_type, name: v.title.text, page_id: v?.title?.ranges[0]?.entity?.id };
                await (new db.work_and_education({
                    fb_id: id,
                    status: 'fetch',
                    title: data.name,
                    field_type: data.field_type,
                    page_id: data.page_id,
                })).save()


                about_work_and_education_set.push(data)
            }
        }



        console.log('about_work_and_education', about_work_and_education_set,)
        user.set('work_and_education_status', 'completed');
        await user.save();
        return about_work_and_education_set;

    }

    if (navigator.location == 'about_places') {
        user.set('places_status', 'progress');    await user.save();
        var res = JSON.parse(r.split("\n")[0]).data;
        var locations = res.user.about_app_sections.nodes[0].activeCollections.nodes[0];

        locations = locations.style_renderer.profile_field_sections[0];
        if (!locations) {
            user.set('places_status', 'not_found');
            await user.save();
            return { success: 'failed', code: 0, message: 'Not found any location' };
        }
        locations = locations.profile_fields.nodes;
        var locations_set = [];
        for await (var location of locations) {
            var data = { field_type: location.field_type, name: location.title.text, page_id: location.title.ranges[0].entity.id };
            await (new db.places({
                fb_id: id,
                status: 'fetch',
                title: data.name,
                field_type: data.field_type,
                page_id: data.page_id,
            })).save()


            locations_set.push(data)
        }
        console.log('locations', locations_set,)
        user.set('places_status', 'completed');
        await user.save();
        return locations_set;
    }

    if (navigator.location == 'about_contact_and_basic_info') {
        user.set('contact_and_basic_info_status', 'progress');    await user.save();
        var res = JSON.parse(r.split("\n")[0]).data;
  
        var contact_and_basic_info = res.user.about_app_sections.nodes[0].activeCollections.nodes[0];

        contact_and_basic_info = contact_and_basic_info.style_renderer.profile_field_sections;
        // return contact_and_basic_info;
        if (!contact_and_basic_info) {
            user.set('contact_and_basic_info_status', 'not_found');
            await user.save();
            return { success: 'failed', code: 0, message: 'Not found contact_and_basic_info_status' };
        }

        var contact_and_basic_info_set = [];
   
        for await (var section of contact_and_basic_info) {

           var sec = section.profile_fields.nodes;

            for await (var v of sec) {
        
                var title=v?.renderer?.title?.text;
                var field_type=v.field_type;
                if(v.field_type=='birthday' || v.field_type=='gender' || v.field_type=='email'|| v.field_type=='address'|| v.field_type=='email'|| v.field_type=='languages'  || v.field_type=='religion'|| v.field_type=='interested_in'  || v.field_type=='website'    || v.field_type=='screenname'    ){
                    title=v?.title.text ;
                    field_type=v?.list_item_groups[0]?.list_items[0]?.text?.text ;
                }

                var data = {v:v, field_type: field_type, name: title, link:v?.link_url,page_id: v?.title?.ranges[0]?.entity?.id };
                await (new db.contact_and_basic_info({
                    fb_id: id,
                    status: 'fetch',
                    title: data.name,
                    field_type: data.field_type,
                    link: data.link,
                    page_id: data.page_id,
                })).save()


                contact_and_basic_info_set.push(data)
            }
        }



        console.log('contact_and_basic_info', contact_and_basic_info_set,)
        user.set('contact_and_basic_info_status', 'completed');
        await user.save();
        return contact_and_basic_info_set;
    }

    if (navigator.location == 'about_family_and_relationships') {
        user.set('family_and_relationships_status', 'progress');    await user.save();
        var res = JSON.parse(r.split("\n")[0]).data;
  
        var family_and_relationships = res.user.about_app_sections.nodes[0].activeCollections.nodes[0];

        family_and_relationships = family_and_relationships.style_renderer.profile_field_sections;

        if (!family_and_relationships) {
            user.set('family_and_relationships_status', 'not_found');
            await user.save();
            return { success: 'failed', code: 0, message: 'Not found family_and_relationships_status' };
        }

        var family_and_relationships_set = [];
   
        for await (var section of family_and_relationships) {

           var sec = section.profile_fields.nodes;

            for await (var v of sec) {
        
 
                var title=v?.renderer?.field?.text_content?.text; 
                var field_type=v.field_type;
                if(v.field_type=='family' ){
                    title=v?.title.text ;
                    field_type=v?.list_item_groups[0]?.list_items[0]?.text?.text ;
                }


                var data = { v: v, field_type: field_type, name:title, page_id: v?.title?.ranges[0]?.entity?.id };
                await (new db.family_and_relationships({
                    fb_id: id,
                    status: 'fetch',
                    title: data.name,
                    field_type: data.field_type,
                    page_id: data.page_id,
                })).save()


                family_and_relationships_set.push(data)
            }
        }



        console.log('family_and_relationships', family_and_relationships_set,)
        user.set('family_and_relationships_status', 'completed');
        await user.save();
        return family_and_relationships_set;
    }

    if (navigator.location == 'about_details') {
        return JSON.parse(r.split("\n")[0]).data.user.about_app_sections.nodes[0].activeCollections.nodes[0];
    }


    if (navigator.location == 'about_life_events') {
        user.set('life_events_status', 'progress');    await user.save();
        var res = JSON.parse(r.split("\n")[0]).data;
        var life_events = res.user.about_app_sections.nodes[0].activeCollections.nodes[0];
        // return life_events.style_renderer.user.timeline_sections.nodes;
        life_events = life_events.style_renderer.user.timeline_sections.nodes;

        // return life_events;
        if (!life_events) {
            user.set('life_events_status', 'not_found');
            await user.save();
            return { success: 'failed', code: 0, message: 'Not found life_events_status' };
        }

        var life_events_set = [];
       
        for await (var year_overview of life_events) {
                if(!year_overview.year_overview){ continue;} 
                if(!year_overview.year_overview.items.nodes){ continue;}
                // life_events_set.push(year_overview.year_overview.items.nodes)
        //     console.log('fff')
   
            for await (var yearly_activity of year_overview.year_overview.items.nodes) {
                var v=yearly_activity;
                
                var title=v?.title?.text;
                var field_type=year_overview.year;
             

                var data = {v:v, field_type: field_type, name: title, link:v?.url,page_id: null };
                await (new db.life_events({
                    fb_id: id,
                    status: 'fetch',
                    title: data.name,
                    field_type: data.field_type,
                    link: data.link,
                    page_id: data.page_id,
                })).save()


                life_events_set.push(data)
            }
        }



        console.log('life_events', life_events_set,)
        user.set('life_events_status', 'completed');
        await user.save();
        return life_events_set;
    }


    if (navigator.location == 'about_overview') {
        user.set('overview_status', 'progress');    await user.save();
        var c = r.split("\n");

        console.log('r', r)
        var a = JSON.parse(c[0]);
        var b = JSON.parse(c[1]);
        var data = {
            data: {
                length: c.length,
                id: b.data.id,
                node_id: b.data.timeline_nav_app_sections.edges[0].node.id,
                node_name: b.data.timeline_nav_app_sections.edges[0].node.name,
            }, a: a, b: b
        };


        return data;
    }

    // if(finded[0]){

    //    return {code:200,message:'Friends Not  Found',data:friends};
    // }else{
    //     return {code:0,message:'Friends Not  Found'};

    // }


    // });

    return { code: 0, message: 'Null' };
}
async function friends_section() {

    var users = await db.user.fetchAll();
    var results = [];
    for await (var user of users) {
        //   users.forEach(async (user)=>{

        user.set('status', 'progress');
        await user.save();
        console.log('user', user.get('fb_id'))
        var res = await get_friends_by_id(user.get('fb_id'));
        if (res.code == 200) {
            user.set('status', 'success_friends');
            await user.save();

        } else {
            user.set('status', 'fail_friends');
            await user.save();
        }

        results.push(res);


    }

    return results;

}


async function user_abouts_section() {

    var users = await db.user.fetchAll();
    var results = [];
    var id = '100045079713576';


      // var navigator = await get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_work_and_education');
    // return await get_user_about_by_id('' + id + '', navigator);
    // var navigator = await get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_places');
    // return await get_user_about_by_id('' + id + '', navigator);
    // var navigator=  await get_colltion_id_of_about_Section_using_navigator(''+id+'','about_family_and_relationships');
    // return  await get_user_about_by_id(''+id+'',navigator);

    // var navigator = await get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_life_events');
    // return await get_user_about_by_id('' + id + '', navigator);

    // var navigator = await get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_contact_and_basic_info');
    // return await get_user_about_by_id('' + id + '', navigator);

    var navigator = await get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_overview');
    return await get_user_about_by_id('' + id + '', navigator);


   
 

    for await (user of users) {
        //   users.forEach(async (user)=>{

        user.set('about_status', 'progress');
        await user.save();
        console.log('user', user.get('fb_id'))
        var res = await get_user_about_by_id(user.get('fb_id'));
        if (res.code == 200) {
            user.set('status', 'success_about');
            await user.save();

        } else {
            user.set('status', 'fail_about');
            await user.save();
        }

        results.push(res);


    }

    return results;

}

app.get('/friends_fetch', async (req, res) => {

    res.send(await friends_section());

})
app.get('/user_abouts', async (req, res) => {

    res.send(await user_abouts_section());

})
app.get('/', async (req, res) => {

    res.send(await friends_section());

})

async function saveFriends(friendsArray, collection_id, pageItems) {
    pageItems.edges.map(async (v) => {
        var n = v['node'];
        var r = {};
        r.title = n.title.text;
        r.image = n.image.uri;
        r.id = n.node.id;
        r.node_id = n.id;
        r.is_active = n.actions_renderer && n.actions_renderer.action && n.actions_renderer.action.is_active;
        r.gender = n.actions_renderer && n.actions_renderer.action && n.actions_renderer.action.client_handler && n.actions_renderer.action.client_handler.profile_action && n.actions_renderer.action.client_handler.profile_action.restrictable_profile_owner && n.actions_renderer.action.client_handler.profile_action.restrictable_profile_owner.gender;
        r.short_name = n.actions_renderer && n.actions_renderer.action && n.actions_renderer.action.client_handler && n.actions_renderer.action.client_handler.profile_action && n.actions_renderer.action.client_handler.profile_action.restrictable_profile_owner && n.actions_renderer.action.client_handler.profile_action.restrictable_profile_owner.short_name;
        // r.gender=n.actions_renderer; 
        //.client_handler.profile_action.restrictable_profile_owner
        r.subtitle_text = n.subtitle_text && n.subtitle_text.text;
        // r.node=n; 
        // console.log(' db.user', db.user)
        (new db.user({
            'status': 'fetch',
            title: r.title,
            image: r.image,
            fb_id: r.id,
            node_id: r.node_id,
            is_active: r.is_active,
            gender: r.gender,
            short_name: r.short_name,
            subtitle_text: r.subtitle_text,
        })).save();
        friendsArray.push(r);
        return r;
    })

    if (pageItems.page_info.has_next_page) {
        // friendsArray.push(pageItems.page_info.end_cursor);
        var again_friends = await get_friends_graphql(collection_id, pageItems.page_info.end_cursor);
        await saveFriends(friendsArray, collection_id, again_friends.data.node.pageItems)
    }
}
// app.get('/', async (req, res) => {
//    var a= await user_info('100073144826140')
//    var b= await user_info(''+fb_user+'')
//    var c= await user_info('100073144826132')
//     res.send(JSON.stringify([a,b,c]));
//     console.log('Completed');


// })

app.listen(port, () => {
    console.log(`Robot start at ${port}`)


})


