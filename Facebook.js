

import db from './database.js';

import axios from 'axios';
import qs from 'qs';
export default class Facebook{



constructor(account){
//b("getAsyncParams")("POST") 
//this function will get all facebook __rev __hsi __lsd __dyn __csr

this.user=null;
this.fb_user = '100073144826134';
this.cookie = 'sb=9_VOYazehgTGfWewd_cO2JwQ; datr=7xZnYWTnJrRyggbdrhfb3ctG; usida=eyJ2ZXIiOjEsImlkIjoiQXJpcnV4dTR1eWg1YSIsInRpbWUiOjE2NjQxMTk2OTN9; locale=en_GB; wd=1680x516; c_user=100073144826134; xs=36%3A7ck4x_8tfMq9OQ%3A2%3A1664388067%3A-1%3A5944; fr=0TJclQG9OPdIMD7DH.AWVa_r5fhqeyjem9iwvmAHv8o3w.BjNIlP.6r.AAA.0.0.BjNIvk.AWXle2bwaw4; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1664349963522%2C%22v%22%3A1%7D';
this.__dyn='7AzHJ16U9ob8ng5K8G6EjBWo2nDwAxu13wsongS3q322aewnof8boG4E762S1DwUx60GE5O0BU2_CxS320om78bbwto88422y11xmfz83WwgEcHzoaEnxO0Bo7O2l2Utwwwi831wiEjwZwlo5qfK6E7e58jwGzE8FU5e7oqBwJK2W5olwUwOzEjUlDw-wAzXwxwjFovUy2a1ywtUuBwJCwLyES0Io88cA0z8c84qifxe3u362-2B0';
this.__csr='gcQbhk54Ahl9ifMx2ktTWb3krOiXP9vEBSLbjZlGl9axjWTAKQyamG_VeAp94uBpriHmmUhyEHmKh7VuhHGbQWG4FEzGubzVp9kl5QnyqyoW544FVohl6hpV9Ujx2qqcAzQ-2-2Wmu2d7K5ECu2i5bz8mwEyoCq2qexi4E521AUeE5e2jwVDXzo462W3p0Nx65E2mwca22E6O32U4Gu3-0wo3Lwq81mU37U2-w20E1rU0icw14O0fIwgC06uE1wU02f8w0ACw5gwci0CA06C80yW7ovw1P605lE1sU0nHw3ZE3Hgdo0oYwc-0a4w228';
this.__rev='1006291630';
this.__s='82twjz:u90l8a:3d434z';
this.__hsi='7148662796336397071';
this.__fb_dstg='NAcNLHs0G23e0DW79ncujB2LUJ9Y6l6ws__mKgTOtwvECB2nPNfRNHQ:36:1664388067';
this.__lsd='iPFWLzYFVqbxXobLxhY_8A';
this.__spin_r='1006291630';
this.__spin_t='1664427760';

this.headers = {
    'authority': 'www.facebook.com',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    // 'cookie': 'sb=_awsY4H_1H5YyWQpxBEdc8vL; datr=_awsY_J9sATqZCHBILllTNWt; locale=en_GB; c_useruser xs=44%3AZV0x-ZObLW3DdA%3A2%3A1663872302%3A-1%3A-1%3A%3AAcXLqExXX0A1jz2m5hgJtITEQzvY2Xaqnyuk-IScEw; fr=096Si8lR2awwbIiPh.AWVn0agLaSGmXvSrXajfjvmFDHs.BjLque.Re.AAA.0.0.BjLque.AWUiRUek0ys; m_page_voiceuser m_pixel_ratio=1; x-referer=eyJyIjoiL3Byb2ZpbGUucGhwP2lkPTEwMDA3MzE0NDgyNjEzNCZ2PWluZm8mbHN0PTEwMDA4NTY3NzE0NzQ0OCUzQTEwMDA3MzE0NDgyNjEzNCUzQTE2NjQwMDI5OTEmZWF2PUFmYVhXaG42YTh3YVd0UWlPX0tHYmFyLXhTamEwa21tUEtuWnhSR1BlZk1FVTNVV3lWbDExSTM3NzlER2oxenlscW8mcGFpcHY9MCIsImgiOiIvcHJvZmlsZS5waHA%2FaWQ9MTAwMDczMTQ0ODI2MTM0JnY9aW5mbyZsc3Q9MTAwMDg1Njc3MTQ3NDQ4JTNBMTAwMDczMTQ0ODI2MTM0JTNBMTY2NDAwMjk5MSZlYXY9QWZhWFdobjZhOHdhV3RRaU9fS0diYXIteFNqYTBrbW1QS25aeFJHUGVmTUVVM1VXeVZsMTFJMzc3OURHajF6eWxxbyZwYWlwdj0wIiwicyI6Im0ifQ%3D%3D; wd=1663x949; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1663999248443%2C%22v%22%3A1%7D',
    'cookie': this.cookie,
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
};


}


  set_user_profile(user){
this.user=user;
// console.log('user set',this.user.get('title'));
}


user_info(id) {

    var config = {
        method: 'post',
        url: 'https://www.facebook.com/api/graphql/',
        headers: this.headers,
        data: ''
    };


    return new Promise((s, f) => {
        config.data = qs.stringify({
            'av': this.fb_user,
            '__user': this.fb_user,
            '__a': '1',
            '__dyn':this.__dyn,
            '__csr':this.__csr,
            '__req': '1d',
            '__hs': '19259.HYP:comet_pkg.2.1.0.2.1',
            'dpr': '1',
            '__ccg': 'GOOD',
            '__rev':this.__rev,
            '__s':this.__s,
            '__hsi':this.__hsi,
            '__comet_req': '15',
            'fb_dtsg':this.__fb_dstg,
            'jazoest': '25452',
            'lsd':this.__lsd,
            '__spin_r':this.__spin_r,
            '__spin_b': 'trunk',
            '__spin_t':this.__spin_t,
            'fb_api_caller_class': 'RelayModern',
            'fb_api_req_friendly_name': 'ProfileCometAboutAppSectionQuery',
            'variables': '{"UFI2CommentsProvider_commentsKey":"ProfileCometAboutAppSectionQuery","appSectionFeedKey":"ProfileCometAppSectionFeed_timeline_nav_app_sections__AQHRGa6sngvWx-2S5Uk-SwuDXnftvYWXzTYW746ivEbTxgtZW0dHF2nXfQEDpI8F0GbmflSQFagWaIRqSzNxmw--1gUdkd0hIf-ir-KNlwW7FPs","collectionToken":null,"pageID":"' + id + '","rawSectionToken":"AQHRGa6sngvWx-2S5Uk-SwuDXnftvYWXzTYW746ivEbTxgtZW0dHF2nXfQEDpI8F0GbmflSQFagWaIRqSzNxmw--1gUdkd0hIf-ir-KNlwW7FPs","scale":1,"sectionToken":"YXBwX3NlY3Rpb246MTAwMDczMTQ0ODI2MTQwOjIzMjcxNTgyMjc=","showReactions":true,"userID":"' + id + '","__relay_internal__pv__FBReelsEnableDeferrelayprovider":true,"__relay_internal__pv__FBReelsDisableBackgroundrelayprovider":false,"__relay_internal__pv__FBReelsShowOverflowMenuInFeedbackBarrelayprovider":false}',
            'server_timestamps': 'true',
            'doc_id': '5227506367346707'
        });
        axios(config)
            .then((response)=> {
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
            .catch((error)=>{
                // console.log(error);
                f(error);
            });


    });

}
get_user_about_graphql(id, navigator) {
    // if(navigator.location=='about_overview'){
    //     navigator.collectionToken=null;
    // }
    var data = qs.stringify({
        'av': this.fb_user,
        '__user': this.fb_user,
        '__a': '1',
        '__dyn':this.__dyn,
        '__csr':this.__csr,
        '__req': '1z',
        '__hs': '19259.HYP:comet_pkg.2.1.0.2.1',
        'dpr': '1',
        '__ccg': 'EXCELLENT',
        '__rev':this.__rev,
        '__s':this.__s,
        '__hsi':this.__hsi,
        '__comet_req': '15',
        'fb_dtsg':this.__fb_dstg,
        'jazoest': '25535',
        'lsd':this.__lsd,
        '__spin_r':this.__spin_r,
        '__spin_b': 'trunk',
        '__spin_t':this.__spin_t,
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
            'cookie': this.cookie,
            'origin': 'https://www.facebook.com',
            'referer': 'https://www.facebook.com/profile.php?id=' + this.fb_user + '&sk=about_contact_and_basic_info',
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
            .then((response)=>{
                // var c = response.data.split("\n");
                if(response.data?.api_error_code >=1){
                    console.error('Eoor',response.data);
                    process.exit("Error");
                    }
                s(response.data);
                console.log('Sended');
            })
            .catch((error)=>{
                console.log('error get_user_about_graphql',error);
              
                f(error);
            });


    });

}
get_friends_page(id) {


    var config = {
        method: 'get',
        url: 'https://www.facebook.com/profile.php?id=' + id + '&sk=friends',
        headers: {
            'authority': 'www.facebook.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'cookie': this.cookie,
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
            .then((response)=>{
                // var c = response.data.split("\n");

                s(response.data);
                console.log('Sended');
            })
            .catch((error)=>{
                console.log('get_friends_page',error);
                f(error);
            });


    });

}
get_friends_graphql(collection_id, cursor) {
    var data = qs.stringify({
        'av': '' + this.fb_user + '',
        '__user': '' + this.fb_user + '',
        '__a': '1',
        '__dyn':this.__dyn,
        '__csr':this.__csr,
        '__req': '1e',
        '__hs': '19259.HYP:comet_pkg.2.1.0.2.1',
        'dpr': '1',
        '__ccg': 'MODERATE',
        '__rev':this.__rev,
        '__s':this.__s,
        '__hsi':this.__hsi,
        '__comet_req': '15',
        'fb_dtsg':this.__fb_dstg,
        'jazoest': '25627',
        'lsd':this.__lsd,
        '__spin_r':this.__spin_r,
        '__spin_b': 'trunk',
        '__spin_t':this.__spin_t,
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
            'cookie': this.cookie,
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
            .then((response)=>{
                console.log('Cursor', cursor);
                s(response.data);
                // console.log(JSON.stringify(response.data));
            })
            .catch((error)=>{
                console.log('get_friends_graphql',error);
            });




    });

}


async get_colltion_id_of_about_Section_using_navigator(id, location = 'about_life_events', url = null) {
    var data = qs.stringify({
        'client_previous_actor_id': '' + this.fb_user + '',
        'route_url': url ?? '/profile.php?id=' + id + '&sk=' + location + '',
        'routing_namespace': 'fb_comet',
        '__user': '' + this.fb_user + '',
        '__a': '1',
        '__dyn':this.__dyn,
        '__csr':this.__csr,
        '__req': '10',
        '__hs': '19263.HYP:comet_pkg.2.1.0.2.1',
        'dpr': '1',
        '__ccg': 'EXCELLENT',
        '__rev':this.__rev,
        '__s':this.__s,
        '__hsi':this.__hsi,
        '__comet_req': '15',
        'fb_dtsg':this.__fb_dstg,
        'jazoest': '25545',
        'lsd':this.__lsd,
        '__spin_r':this.__spin_r,
        '__spin_b': 'trunk',
        '__spin_t': this.__spin_t
    });
    var config = {
        method: 'post',
        url: 'https://www.facebook.com/ajax/navigation/',
        headers: {
            'authority': 'www.facebook.com',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/x-www-form-urlencoded',
            'cookie': this.cookie,
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
            .then(async (response)=>{
                console.log('navigating to ', location + ' => ' + id + ' ' + (url ? 'Redirected' : ''));
              
                var res = response.data.replace('for (;;);', '');
                res = JSON.parse(res); 
              
                if(res?.errorDescription){ console.log('Error On navifgate',res.errorDescription); f(res.error);return 1}
                if(res?.payload?.error){ console.log('Error On navifgate',res); f(res.error);return 1}
                res = res.payload.payload;

              
                    if (res?.result?.type == 'route_redirect') {
                        // console.log(id, res?.result?.type   )
                        s(await this.get_colltion_id_of_about_Section_using_navigator(id, location, res.result.redirect_url));
                    } else {
                        var returndata = res.result.exports.rootView.props;
                        returndata.redirect_url = res.result.redirect_url;
                        returndata.location = location;
                        // returndata.test = res.result.exports;
                        console.log( this.send);
                        // this.send('as');
                        s(returndata);
                    }
 
                    // console.log(res)
                // console.log(JSON.stringify(response.data));
            })
            .catch((error)=>{
                console.log('get_colltion_id_of_about_Section_using_navigator',error);
            });




    });

}

async get_friends_by_id(id) {
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




async get_user_about_by_id(id, navigator) {
    var user = await db.user.where('fb_id', id).fetch();

    if (navigator.location == 'about_work_and_education') { user.set('work_and_education_status', 'progress'); }
    if (navigator.location == 'about_places') { user.set('places_status', 'progress'); }
    if (navigator.location == 'about_contact_and_basic_info') { user.set('contact_and_basic_info_status', 'progress'); }
    if (navigator.location == 'about_family_and_relationships') { user.set('family_and_relationships_status', 'progress'); }
    if (navigator.location == 'about_details') { user.set('details_status', 'progress'); }
    if (navigator.location == 'about_life_events') { user.set('life_events_status', 'progress'); }
    if (navigator.location == 'about_overview') { user.set('overview_status', 'progress'); }
    await user.save();



    var r = await this.get_user_about_graphql(id, navigator);
    console.log('navigator', navigator)
    // console.log('data',r)
    //    await get_user_about_graphql(id).then(async (r)=>{


    if (navigator.location == 'about_work_and_education') {

        user.set('work_and_education_status', 'progress');    await user.save();

        var res = JSON.parse(r.split("\n")[0]).data;

        var about_work_and_education = res.user.about_app_sections.nodes[0].activeCollections.nodes[0];

        about_work_and_education = about_work_and_education?.style_renderer?.profile_field_sections;

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



        // console.log('about_work_and_education', about_work_and_education_set,)
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
            var title='';
            var page_id='';
            if(location.field_type=='null_state'){
                title=location.title.text;
            }else{
                page_id=location.title.ranges[0].entity.id;
                title=location.title.text;
            
            }
            var data = { field_type: location.field_type, name: title, page_id: page_id };
            await (new db.places({
                fb_id: id,
                status: 'fetch',
                title: data.name,
                field_type: data.field_type,
                page_id: data.page_id,
            })).save()


            locations_set.push(data)
        }
        // console.log('locations', locations_set,)
        user.set('places_status', 'completed');
        await user.save();
        return locations_set;
    }

    if (navigator.location == 'about_contact_and_basic_info') {
        user.set('contact_and_basic_info_status', 'progress');    await user.save();
        var res = JSON.parse(r.split("\n")[0]).data;
  
        var contact_and_basic_info = res.user.about_app_sections.nodes[0].activeCollections.nodes[0];

        contact_and_basic_info = contact_and_basic_info?.style_renderer.profile_field_sections;
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



        // console.log('contact_and_basic_info', contact_and_basic_info_set,)
        user.set('contact_and_basic_info_status', 'completed');
        await user.save();
        return contact_and_basic_info_set;
    }

    if (navigator.location == 'about_family_and_relationships') {
        user.set('family_and_relationships_status', 'progress');    await user.save();
        var res = JSON.parse(r.split("\n")[0]).data;
   
  
        var family_and_relationships = res.user.about_app_sections.nodes[0].activeCollections.nodes[0];

        family_and_relationships = family_and_relationships?.style_renderer?.profile_field_sections;
 
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
                // console.log('data',data);
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



        // console.log('family_and_relationships', family_and_relationships_set,)
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



        // console.log('life_events', life_events_set,)
        user.set('life_events_status', 'completed');
        await user.save();
        return life_events_set;
    }


    if (navigator.location == 'about_overview') {
        user.set('overview_status', 'progress');    await user.save();
        var res = JSON.parse(r.split("\n")[0]);   
        var overview = res.data.user.about_app_sections.nodes[0].activeCollections.nodes[0];
       console.log(overview);
        // return overview;
        if (! overview.style_renderer.profile_field_sections) {
            user.set('overview_status', 'not_found');
            await user.save();
            return { success: 'failed', code: 0, message: 'Not found overview_status' };
        }

        overview = overview.style_renderer.profile_field_sections[0].profile_fields.nodes;
 


        var overview_set = [];
 
   
            for await (var v of overview) {
                
                
                var title=v?.title?.text;
                var field_type=v.field_type;
                var link=null;
                var page_id=null;

                if(field_type=='relationship'){ 
                    title=v?.renderer?.field?.text_content?.text;
                }
                if(v?.renderer?.field?.title?.ranges){ 
                    page_id= v?.renderer?.field?.title?.ranges[0]?.entity?.id;
                    link= v?.renderer?.field?.title?.ranges[0]?.entity?.url;
                }
             

                var data = {v:v, field_type: field_type, name: title, link:link,page_id:page_id};
                await (new db.overview({
                    fb_id: id,
                    status: 'fetch',
                    title: data.name,
                    field_type: data.field_type,
                    link: data.link,
                    page_id: data.page_id,
                })).save()


                overview_set.push(data)
            }
      



        // console.log('overview', overview_set,)
        user.set('overview_status', 'completed');
        await user.save();
        return overview_set;

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
async friends_section() {

    var users = await db.user.where('status', 'fetch').fetchAll();
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


async user_abouts_section() {
    //hi how are you
// console.log('Url Hit','user_abouts_section')

    var results_all = [];
    var id = '365378100200224';
    var navigator =null;
    var timeForDelay =1000;//1sec
  
    // navigator = await get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_life_events');
    // return  await get_user_about_by_id('' + id + '', navigator);
    var contex=this;
    // db.bookshelf.transaction(async function (t) {
    // db.bookshelf.withTransaction(async function(trx) {
        // console.log(trx)
    var user = contex.user;
    // for await (var user of users) {
        //   users.forEach(async (user)=>{
  


     return   new Promise((s,f)=>{
        console.log('Waiting for fetch');
        setTimeout(async()=>{ 
      
          try {
            
           user.set('status', 'progress');  await user.save();
            // console.log('this.user',user.get('fb_id'))
        var  results={};

            id=user.get('fb_id');
            results[id]={};
            // navigator = await contex.get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_work_and_education');
            // results[id].about_work_and_education= await contex.get_user_about_by_id('' + id + '', navigator);
        
            // navigator = await contex.get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_places');
            // results[id].about_places= await contex.get_user_about_by_id('' + id + '', navigator);
        
            navigator=await contex.get_colltion_id_of_about_Section_using_navigator(''+id+'','about_family_and_relationships');
            results[id].about_family_and_relationships=  await contex.get_user_about_by_id(''+id+'',navigator);
        
            // navigator = await contex.get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_life_events');
            // results[id].about_life_events= await contex.get_user_about_by_id('' + id + '', navigator);
        
            // navigator = await contex.get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_contact_and_basic_info');
            // results[id].about_contact_and_basic_info= await contex.get_user_about_by_id('' + id + '', navigator);
        
            navigator = await contex.get_colltion_id_of_about_Section_using_navigator('' + id + '', 'about_overview');
            results[id].about_overview= await contex.get_user_about_by_id('' + id + '', navigator);
        
           user.set('status', 'success_about'); await user.save();
            
            
            // var res = await contex.get_user_about_by_id(user.get('fb_id'));
            // if (res.code == 200) {
            //     user.set('status', 'success_about');
            //     await user.save();

            // } else {
            //     user.set('status', 'fail_about');
            //     await user.save();
            // }
            // await contex.user_abouts_section()
            s(results);
          } catch (error) {
            console.log('Get a failer',error);
            // await contex.user_abouts_section()
           s(results);
          }
                // results_all.push(results);

            },timeForDelay)
        })
    // });

 

}


async saveFriends(friendsArray, collection_id, pageItems) {
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
}

