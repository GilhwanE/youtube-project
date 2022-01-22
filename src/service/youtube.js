import axios from 'axios';

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: key },
    });
    // youtube
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  //라이브러리 자체에서 json
  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

//   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
//   this.getRequestOptions
// );
// const result_1 = await response.json();
// return result_1.items.map((item) => ({ ...item, id: item.id.videoId })); // id에 비디오 아이디로 덮어준다
// id를 변환해줘야한다 result.itmes에서 가져온 결ㅇ과를
export default Youtube;
