class Youtube {
  constructor(key) {
    key = this.key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items); // result에 있는 items를 받아올것   setViedos 업데이트된 부분에 결과값을 받아올것
  }

  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      ); // id에 비디오 아이디로 덮어준다
    // id를 변환해줘야한다 result.itmes에서 가져온 결ㅇ과를
  }
}

export default Youtube;
