import { useEffect, useState } from "react";
import Button from "../atoms/Button.jsx";
import FormField from "./FormField.jsx";

const defaults = {
  title: "",
  category: "Teknologi",
  excerpt: "",
  image: "",
  authorName: "",
  authorRole: "",
  price: "Rp 0",
  rating: 4.5,
  reviews: 0,
};

export default function CourseForm({ categories = [], initialData = null, onSave, onCancel }) {
  const [form, setForm] = useState(defaults);

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title ?? "",
        category: initialData.category ?? (categories[0] || "Teknologi"),
        excerpt: initialData.excerpt ?? "",
        image: initialData.image ?? "",
        authorName: initialData.authorName ?? "",
        authorRole: initialData.authorRole ?? "",
        price: initialData.price ?? "Rp 0",
        rating: initialData.rating ?? 4.5,
        reviews: initialData.reviews ?? 0,
      });
    } else {
      setForm(defaults);
    }
  }, [initialData, categories]);

  const update = (name) => (e) => setForm((f) => ({ ...f, [name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      title: form.title.trim(),
      category: form.category,
      excerpt: form.excerpt.trim(),
      image: form.image || "/images/react-fundamentals.jpg",
      authorName: form.authorName.trim(),
      authorRole: form.authorRole.trim(),
      price: form.price,
      rating: Number(form.rating) || 0,
      reviews: Number(form.reviews) || 0,
    };
    onSave?.(payload);
  };

  return (
    <form onSubmit={submit} className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormField id="title" label="Judul" required placeholder="Judul course"
                   value={form.title} onChange={update("title")} />

        <div className="space-y-1">
          <label htmlFor="category" className="block text-sm font-medium text-slate-700">Kategori</label>
          <select
            id="category"
            value={form.category}
            onChange={update("category")}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <FormField id="authorName" label="Nama Pengajar" placeholder="Nama pengajar"
                   value={form.authorName} onChange={update("authorName")} />
        <FormField id="authorRole" label="Role Pengajar" placeholder="Mis. Frontend Engineer"
                   value={form.authorRole} onChange={update("authorRole")} />
        <FormField id="price" label="Harga" placeholder="Rp 300K"
                   value={form.price} onChange={update("price")} />
        <FormField id="image" label="Gambar (path di /public/images)" placeholder="/images/react-fundamentals.jpg"
                   value={form.image} onChange={update("image")} />
        <FormField id="rating" label="Rating" type="number" step="0.1"
                   value={form.rating} onChange={update("rating")} />
        <FormField id="reviews" label="Jumlah Review" type="number"
                   value={form.reviews} onChange={update("reviews")} />

        <div className="md:col-span-2 space-y-1">
          <label htmlFor="excerpt" className="block text-sm font-medium text-slate-700">Ringkasan</label>
          <textarea
            id="excerpt"
            rows={3}
            placeholder="Deskripsi singkat course"
            value={form.excerpt}
            onChange={update("excerpt")}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" variant="primary">{initialData ? "Simpan Perubahan" : "Tambah"}</Button>
        <Button type="button" variant="muted" onClick={onCancel}>Batal</Button>
      </div>
    </form>
  );
}