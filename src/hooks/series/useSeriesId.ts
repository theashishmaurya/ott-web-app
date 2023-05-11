import { useQuery } from 'react-query';

import type { PlaylistItem } from '#types/playlist';
import { getSeriesByMediaIds } from '#src/services/api.service';
import useQueryParam from '#src/hooks/useQueryParam';
import { getSeriesIdFromEpisode } from '#src/utils/media';

const useGetSeriesId = (item: PlaylistItem) => {
  const staticSeriesId = useQueryParam('seriesId') || getSeriesIdFromEpisode(item);

  const { isLoading, data } = useQuery(['seriesId', item.mediaid], async () => {
    // get all series for the given media id
    const data = await getSeriesByMediaIds([item.mediaid]);
    // get first series for the requested episode
    const firstSeries = data?.[item.mediaid]?.[0];

    return firstSeries?.series_id;
  });

  return {
    isLoading,
    seriesId: data || staticSeriesId,
  };
};

export default useGetSeriesId;
