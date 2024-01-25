export default {
    methods: {
      addAccessTokenToHeaders() {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          // Thêm AccessToken vào tiêu đề của yêu cầu HTTP
          this.$request.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }
      },
      removeAccessTokenFromHeaders() {
        // Xóa AccessToken khỏi tiêu đề của yêu cầu HTTP
        delete this.$axios.defaults.headers.common['Authorization'];
      },
    },
  };