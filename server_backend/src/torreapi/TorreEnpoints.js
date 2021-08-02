import axios from "axios";

export function getUsers(data, size, after, aggregate) {
  //var data = filter || '{"opento":{"term":"full-time-employment"}}';
  var sizeParam = size ? `size=${size}` : "size=10";
  var afterParam = after ? `&after=${after}` : "";
  var aggregateParam = aggregate ? `&aggregate=${aggregate}` : "";

  var config = {
    method: "post",
    url: `https://search.torre.co/people/_search?${sizeParam}${afterParam}${aggregateParam}`,
    headers: {
      authority: "search.torre.co",
      "sec-ch-ua":
        '"Chromium";v="92", " Not A;Brand";v="99", "Microsoft Edge";v="92"',
      accept: "application/json, text/plain, */*",
      "x-torre-subject": "574769",
      "sec-ch-ua-mobile": "?0",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36 Edg/92.0.902.62",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://torre.co",
      "sec-fetch-site": "same-site",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://torre.co/",
      "accept-language": "en-US,en;q=0.9,es;q=0.8",
    },
    data: data,
  };

  return axios(config)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

export function getJobs(data, size, after, aggregate) {
  //var data =filter || '{"skill/role":{"text":"javascript","experience":"potential-to-develop"}}';
  var sizeParam = size ? `size=${size}` : "size=10";
  var afterParam = after ? `&after=${after}` : "";
  var aggregateParam = aggregate ? `&aggregate=${aggregate}` : "";

  var config = {
    method: "post",
    url: `https://search.torre.co/opportunities/_search?${sizeParam}${afterParam}${aggregateParam}`,
    headers: {
      authority: "search.torre.co",
      "sec-ch-ua":
        '"Chromium";v="92", " Not A;Brand";v="99", "Microsoft Edge";v="92"',
      accept: "application/json, text/plain, */*",
      "x-torre-subject": "574769",
      "sec-ch-ua-mobile": "?0",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36 Edg/92.0.902.62",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://torre.co",
      "sec-fetch-site": "same-site",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://torre.co/",
      "accept-language": "en-US,en;q=0.9,es;q=0.8",
    },
    data: data,
  };

  return axios(config)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}
