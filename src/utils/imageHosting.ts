
export const imageHosting = async (image: any) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
  
      const url = `https://api.imgbb.com/1/upload?key=${'9154e06db99f9697be6caa0fd7dd4515'}`;
  
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
  
      const imageData = await response.json();
  
      return imageData.data.display_url
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };