function GoogleLoginButton() {
  return (
    <button className="flex items-center justify-center  border border-gray-300 rounded-3xl p-2 hover:bg-gray-100">
      {/* Google SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-7 w-7 rounded-full"
      >
        <path
          fill="#4285F4"
          d="M24 9.5c3.2 0 5.9 1.2 8 3.2l6-6c-3.5-3.3-8-5.2-14-5.2C12.5 1.5 4.7 8.8 2 18l7.3 5.6C11.2 15.3 17 9.5 24 9.5z"
        />
        <path
          fill="#34A853"
          d="M46.5 24.5c0-1.6-.2-3.2-.5-4.6H24v9h12.7c-.5 2.8-1.9 5.2-3.9 6.8l6.1 4.7c3.5-3.3 5.6-8.3 5.6-14z"
        />
        <path
          fill="#FBBC05"
          d="M10.3 29.7c-1.4-4-1.4-8.4 0-12.3L2 11.6C-1.5 18.5-1.5 29.5 2 36.4l8.3-6.7z"
        />
        <path
          fill="#EA4335"
          d="M24 46.5c5.4 0 9.9-1.8 13.3-4.8l-6.1-4.7c-1.7 1.2-3.8 2-7.2 2-6.9 0-12.7-4.7-14.7-11.1l-7.3 5.6C6.9 41.8 14.8 46.5 24 46.5z"
        />
      </svg>
      {/* Text */}
      <span className="ml-2">Login with Google</span>
    </button>
  );
}

export default GoogleLoginButton;
