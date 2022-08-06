let value_brand_slug;
function success_list(response) {
    let value_brand_slug;
    let i = 0;
    while (i < response[`data`][`data`].length) {
        box[`innerHTML`] += `<div id="phone_brands"><button class="brand_button">${response[`data`][`data`][i][`brand_name`]}</button></div>`;
     value_brand_slug = response[`data`][`data`][i][`brand_slug`];
     console.log(value_brand_slug);
        i++;
    }   
    return value_brand_slug[i];
}
function failure_list(error) {
box[`innerHTML`] = `error getting brands list`;
}
axios.request({
    url: `https://api-mobilespecs.azharimm.site/v2/brands/`
}).then(success_list).catch(failure_list);

function details_brands(details){
   axios.request({
    url: `http://api-mobilespecs.azharimm.site/v2/brands/${value_brand_slug}`
   }).then(success_details_brands).catch(failure_details_brands);
}

let box = document.getElementById(`box`);
box.addEventListener(`click`,details_brands);
value_brand_slug = success_list();
console.log(value_brand_slug);