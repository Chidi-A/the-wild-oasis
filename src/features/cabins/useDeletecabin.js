import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';
import { toast } from 'react-hot-toast';

export default function useDeletecabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('Cabin deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isDeleting, deleteCabin };
}
