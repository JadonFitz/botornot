export default function Footer() {
  return (
    <footer className="border-t border-line py-8 mt-auto">
      <div className="max-w-[76rem] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-dim text-[11px] tracking-wide">
          © {new Date().getFullYear()} New Terrain Creative LLC. All rights reserved.
        </p>
        <p className="text-dim text-[11px] tracking-wide">
          Confidential — for authorized recipients only.
        </p>
      </div>
    </footer>
  )
}
