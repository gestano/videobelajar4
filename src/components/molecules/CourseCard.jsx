import Button from "../atoms/Button.jsx";

export default function CourseCard({
  id,
  image = "/images/react-fundamentals.jpg",
  title,
  excerpt,
  authorName,
  authorRole,
  rating = 3.5,
  reviews = 86,
  price = "Rp 300K",
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 text-base font-semibold text-slate-800">{title}</h3>
        <p className="line-clamp-2 text-sm text-slate-600">{excerpt}</p>
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-slate-200" />
          <div className="text-sm">
            <p className="font-medium text-slate-800">{authorName}</p>
            <p className="text-slate-500">{authorRole}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-600">★ {rating} ({reviews})</p>
          <p className="font-bold text-green-600">{price}</p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" className="col-span-3">Lihat Detail</Button>
          <Button variant="secondary" size="sm" onClick={() => onEdit?.(id)}>Edit</Button>
          <Button variant="danger" size="sm" onClick={() => onDelete?.(id)}>Hapus</Button>
        </div>
      </div>
    </div>
  );
}