export function getOptimizedImageUrl(url: string, width: number = 800, quality: number = 80) {
  if (!url) return '';
  
  // Handle Unsplash optimization
  if (url.includes('images.unsplash.com')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?q=${quality}&w=${width}&auto=format&fit=crop&format=webp`;
  }
  
  // Handle Pexels optimization
  if (url.includes('images.pexels.com')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}&format=webp`;
  }
  
  return url;
}

export function getImageSrcSet(url: string, widths: number[] = [400, 800, 1200, 1600]) {
  if (!url || (!url.includes('unsplash.com') && !url.includes('pexels.com'))) return undefined;
  
  return widths
    .map(w => `${getOptimizedImageUrl(url, w)} ${w}w`)
    .join(', ');
}

