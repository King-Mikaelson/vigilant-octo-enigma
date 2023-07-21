import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../../supabase/client';

type InitialState = {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  session: any;
  error: any;
};

interface SupabaseUser {
  id: string;
  email: string;
  created_at: string;
  // Add other properties as needed
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  session: null,
  error: null,
};

interface User {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, password }: User, { rejectWithValue }) => {
    try {
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        return rejectWithValue(error.message);
      }

      return { session, user };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }: User, { rejectWithValue }) => {
    try {
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return rejectWithValue(error.message);
      }

      return { session, user };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        return rejectWithValue(error.message);
      }

      return null;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated: (state, value) => {},
    signOutUser: (state) => {
      console.log(state);
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateSession: (state, action) => {
      state.session = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.session = action.payload.session;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.session = action.payload.session;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null; // Clear user data upon successful logout
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setIsAuthenticated, signOutUser, updateUser, updateSession } =
  userSlice.actions;

export default userSlice.reducer;
