function FacebookLoginButton() {
  return (
    <button className="flex items-center justify-center border rounded-3xl border-gray-300  p-2 hover:bg-gray-100">
      {/* Facebook SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-7 w-7 rounded-full"
        fill="#1877F2" // Facebook blue color
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
      </svg>
      {/* Text */}
      <span className="ml-2">Login with Facebook</span>
    </button>
  );
}

export default FacebookLoginButton;
