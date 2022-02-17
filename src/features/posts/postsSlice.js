import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isLoading: false,
  failedToLoad: false
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (searchTerm) => {
  console.log('Fetching posts...')
  const posts = await fetch(`http://localhost:5000/tweets?term=${searchTerm}`);
  const json = await posts.json();
  console.log('Posts fetched!');
  return json._realData;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = false;

      const { data, includes } = action.payload;
      console.log(includes)

      state.posts = data.map(post => {
        const user = includes.users.find(u => u.id === post.author_id);

        return {
          text: post.text,
          reply_count: post.public_metrics.reply_count,
          retweet_count: post.public_metrics.retweet_count,
          like_count: post.public_metrics.like_count,
          name: user.name,
          username: user.username,
          profile_image: user.profile_image_url,
          id: post.id
        }
      });
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    }
  }
});

export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;
export const { removePost } = postsSlice.actions;
export default postsSlice.reducer;
