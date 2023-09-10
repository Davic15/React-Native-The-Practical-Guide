import { API_KEY, GEO_API } from '@env';

export const getMapPreview = (lat, lon) => {
    const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${API_KEY}&format=jpeg&center=lonlat:${lon},${lat}&marker=lonlat:${lon},${lat};color:%23ff0000;size:medium`;
    return imagePreviewUrl;
};

export const getAddress = async (lat, lon) => {
    const url = `https://us1.locationiq.com/v1/reverse?key=${GEO_API}&lat=${lat}&lon=${lon}&format=json`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch address!');
    }

    const data = await response.json();
    const address = data.display_name;
    return address;
};
