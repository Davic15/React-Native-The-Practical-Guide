//const API_KEY = 'a10882d5388846c3b80dabde615feef9';
import { API_KEY } from '@env';

export const getMapPreview = (lat, lon) => {
    //const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=400&height=200&center=lonlat:${lon},${lat}&zoom=14&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium;text:1|lonlat:${lon},${lat};color:%23ff0000;size:small;text:1&apiKey=${API_KEY}`;
    //const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=400&height=200&center=lonlat:${lon},${lat}&zoom=14&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium;text:1|lonlat:${lon},${lat};color:%23ff0000;text:1&apiKey=${API_KEY}`;
    const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${API_KEY}&format=jpeg&center=lonlat:${lon},${lat}&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium`;
    return imagePreviewUrl;
};
