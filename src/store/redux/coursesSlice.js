import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api/courses";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// Thunks (Get, Add, Edit, Delete)
export const fetchCourses = createAsyncThunk(
  "courses/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const data = await api.listCourses(params);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const addCourse = createAsyncThunk(
  "courses/add",
  async (payload, { rejectWithValue }) => {
    try {
      const created = await api.createCourse(payload);
      return created;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const editCourse = createAsyncThunk(
  "courses/edit",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const updated = await api.updateCourse(id, data);
      return updated;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const removeCourse = createAsyncThunk(
  "courses/remove",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteCourse(id);
      return id;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.items = Array.isArray(action.payload) ? action.payload : [];
        state.isLoading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Gagal memuat data.";
      })
      // ADD
      .addCase(addCourse.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.error = action.payload || "Gagal menambah data.";
      })
      // EDIT
      .addCase(editCourse.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.items.findIndex((x) => String(x.id) === String(updated.id));
        if (idx !== -1) state.items[idx] = updated;
      })
      .addCase(editCourse.rejected, (state, action) => {
        state.error = action.payload || "Gagal mengubah data.";
      })
      // DELETE
      .addCase(removeCourse.fulfilled, (state, action) => {
        const id = action.payload;
        state.items = state.items.filter((x) => String(x.id) !== String(id));
      })
      .addCase(removeCourse.rejected, (state, action) => {
        state.error = action.payload || "Gagal menghapus data.";
      });
  },
});

export const { reset } = coursesSlice.actions;

// Selectors
export const selectCourses = (state) => state.courses.items;
export const selectCoursesLoading = (state) => state.courses.isLoading;
export const selectCoursesError = (state) => state.courses.error;

export default coursesSlice.reducer;