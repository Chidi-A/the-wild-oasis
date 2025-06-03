import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // Only process image if it's a new image (not a URL)
  let imagePath = newCabin.image;
  let imageName;
  if (!hasImagePath) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  }

  let query = supabase.from('cabins');

  if (!id) {
    // For new cabins, always include the image path
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    // For updates, only include image if it's a new one
    const updateData = hasImagePath
      ? { ...newCabin }
      : { ...newCabin, image: imagePath };
    query = query.update(updateData).eq('id', id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  if (hasImagePath) return data;

  // Only upload image if it's a new image (not a URL)
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from('cabin-images')
      .upload(imageName, newCabin.image);

    if (storageError) {
      // Only try to delete if we have data (cabin was created)
      if (data) {
        await supabase.from('cabins').delete().eq('id', data.id);
      }
      console.error(storageError);
      throw new Error('Cabin image could not be uploaded');
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }

  return data;
}
