import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-40 text-center">
      <span className="font-serif text-mocha" style={{ fontSize: "3rem" }}>
        404
      </span>
      <h1 className="mt-2 font-serif text-espresso">Không tìm thấy trang</h1>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-mocha px-6 py-3 text-cream"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
