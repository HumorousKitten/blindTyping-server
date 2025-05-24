export function generateSlug(title, id) {
  const slugTitle = title 
    .toLowerCase()
    .trim()
    .replace(/[\s\n\r\t]+/g, '-')     
    .replace(/[^\w\-а-яё]/gi, '')    
    .replace(/-+/g, '-')              
    .replace(/^-+|-+$/g, '')
		
	return `${slugTitle}-${id}`
}