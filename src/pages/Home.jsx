import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import Newsletter from "../components/organisms/Newsletter";
import CourseCard from "../components/molecules/CourseCard";
import CourseForm from "../components/molecules/CourseForm";
import Button from "../components/atoms/Button.jsx";
import { categories } from "../data/courses.js";

import {
  fetchCourses,
  addCourse as addCourseThunk,
  editCourse as editCourseThunk,
  removeCourse as removeCourseThunk,
  selectCourses,
  selectCoursesLoading,
  selectCoursesError,
} from "../store/redux/coursesSlice";

export default function Home() {
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [editing, setEditing] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector(selectCourses);
  const isLoading = useSelector(selectCoursesLoading);
  const error = useSelector(selectCoursesError);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const filtered = useMemo(() => {
    if (activeCat === categories[0]) return items;
    return items.filter((c) => c.category === activeCat);
  }, [activeCat, items]);

  const formCategories = categories.filter((c) => c !== "Semua Kelas");

  const addCourse = async (payload) => {
    await dispatch(addCourseThunk(payload)).unwrap();
  };

  const updateCourse = async (id, payload) => {
    await dispatch(editCourseThunk({ id, data: payload })).unwrap();
  };

  const deleteCourse = async (id) => {
    if (!confirm("Hapus course ini?")) return;
    await dispatch(removeCourseThunk(id)).unwrap();
    if (editing?.id === id) setEditing(null);
  };

  return (
    <div className="min-h-screen bg-amber-50/30">
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-7xl px-4">
        <section className="mt-8 md:mt-12">
          {/* Kategori */}
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const isActive = activeCat === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCat(cat)}
                  aria-pressed={isActive}
                  className={`whitespace-nowrap rounded-lg !px-4 !py-2 !text-sm !bg-white border shadow-sm transition-colors focus:outline-none focus:ring-2 ${
                    isActive
                      ? "!border-green-500 text-green-600 font-semibold focus:ring-green-200"
                      : "!border-slate-200 text-slate-600 hover:text-slate-900 hover:!border-slate-300 focus:ring-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Toolbar + Form (Add/Edit) */}
          <div className="mt-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">Daftar Course</h2>
            <Button
              variant="primary"
              onClick={() => {
                setEditing(null);
                setIsFormOpen(true);
              }}
            >
              + Tambah Kelas
            </Button>
          </div>

          {isFormOpen && (
            <CourseForm
              categories={formCategories}
              initialData={editing}
              onCancel={() => {
                setIsFormOpen(false);
                setEditing(null);
              }}
              onSave={async (payload) => {
                if (editing) await updateCourse(editing.id, payload);
                else await addCourse(payload);
                setIsFormOpen(false);
                setEditing(null);
              }}
            />
          )}

          {/* Loading / Error / Grid */}
          <div className="mt-6 min-h-[100px]">
            {isLoading && <p className="text-slate-600">Memuat data...</p>}
            {error && <p className="text-red-600">Terjadi kesalahan memuat data. Coba muat ulang.</p>}

            {!isLoading && !error && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((c) => (
                  <CourseCard
                    key={c.id}
                    {...c}
                    onEdit={() => {
                      setEditing(c);
                      setIsFormOpen(true);
                    }}
                    onDelete={() => deleteCourse(c.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}