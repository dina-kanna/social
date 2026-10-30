
export default function Avatar({
  src,
  name = 'User',
  size = 'md',
  ring = false,
  online = false,
  className = '',
  onClick
}) {
  const sizes = {
    xs: 'h-7 w-7 text-[10px]',
    sm: 'h-9 w-9 text-xs',
    md: 'h-11 w-11 text-sm',
    lg: 'h-20 w-20 text-xl',
    xl: 'h-28 w-28 text-3xl',
    '2xl': 'h-36 w-36 text-4xl'
  };

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <span
      onClick={onClick}
      className={`
        relative inline-flex shrink-0 items-center justify-center
        rounded-full
        ${ring ? 'bg-gradient-to-tr from-violet-600 via-pink-500 to-orange-400 p-[3px]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      <span className={`relative flex ${sizes[size] || sizes.md} items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-100 to-pink-100 font-extrabold text-violet-700 ${ring ? 'border-[2px] border-white' : ''}`}>
        {src ? (
          <img
            src={src}
            alt={`${name} profile`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="absolute inset-0 h-full w-full rounded-full object-cover transition duration-300 hover:scale-110"
          />
        ) : (
          <span>{initials || 'U'}</span>
        )}
      </span>

      {online && (
        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-[2.5px] border-white bg-green-500" />
      )}
    </span>
  );
}
