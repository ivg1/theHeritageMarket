import { createTheme } from 'flowbite-react';

export const lightTheme = createTheme({
    navbar: {
        root: {
            base: 'border-b border-slate-200 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-sm',
            rounded: {
                on: 'rounded',
                off: '',
            },
            bordered: {
                on: 'border',
                off: '',
            },
            inner: {
                base: 'mx-auto flex flex-wrap items-center justify-between',
                fluid: {
                    on: '',
                    off: 'container',
                },
            },
        },
        brand: {
            base: 'flex items-center gap-2',
        },
        collapse: {
            base: 'w-full md:block md:w-auto',
            list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
            hidden: {
                on: 'hidden',
                off: '',
            },
        },
        link: {
            base: 'block py-2 pl-3 pr-4 md:p-0',
            active: {
                on: 'font-semibold text-red-600 md:bg-transparent md:text-red-600',
                off: 'border-b border-transparent text-slate-600 hover:text-slate-900 md:border-0 md:hover:bg-transparent md:hover:text-red-600',
            },
            disabled: {
                on: 'text-slate-400 hover:cursor-not-allowed',
                off: '',
            },
        },
        toggle: {
            base: 'inline-flex items-center rounded-lg p-2 text-sm text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-200 md:hidden',
            icon: 'h-6 w-6 shrink-0',
            title: 'sr-only',
        },
    },
    button: {
        color: {
            alternative: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 focus:ring-slate-200 hover:text-red-500 hover:cursor-pointer',
            light: 'border border-slate-300 bg-slate-50 text-slate-900 hover:bg-slate-100 focus:ring-slate-200 hover:text-red-500 hover:cursor-pointer',
            red: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-200 hover:cursor-pointer',
            default: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-200 hover:cursor-pointer',
			bgless: 'bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-slate-200 hover:text-red-600 hover:cursor-pointer',
			bglessOnlytext: 'bg-transparent text-slate-900 hover:text-red-600 focus:ring-slate-200 p-2 hover:cursor-pointer',
        },
    },
    accordion: {
        root: {
            base: 'divide-y divide-slate-200 border-slate-200',
            flush: {
                off: 'rounded-2xl border',
                on: 'border-b',
            },
        },
        content: {
            base: 'bg-white p-5 first:rounded-t-lg last:rounded-b-lg',
        },
        title: {
            arrow: {
                base: 'h-6 w-6 shrink-0',
                open: {
                    off: '',
                    on: 'rotate-180',
                },
            },
            base: 'flex w-full items-center justify-between p-5 text-left font-medium text-slate-600 first:rounded-t-lg last:rounded-b-lg',
            flush: {
                off: 'hover:bg-slate-50 focus:ring-4 focus:ring-slate-200',
                on: 'bg-transparent',
            },
            heading: '',
            open: {
                off: '',
                on: 'bg-slate-100 text-slate-900',
            },
        },
    },
    blockquote: {
        root: {
            base: 'text-xl font-semibold italic text-slate-900',
        },
    },
    avatar: {
        root: {
            base: 'hover:cursor-pointer'
        }
    }
});

export const darkTheme = createTheme({
    navbar: {
        root: {
            base: 'border-b border-slate-800 bg-black px-2 py-2.5 shadow-sm backdrop-blur-sm sm:px-4',
            rounded: {
                on: 'rounded',
                off: '',
            },
            bordered: {
                on: 'border',
                off: '',
            },
            inner: {
                base: 'mx-auto flex flex-wrap items-center justify-between',
                fluid: {
                    on: '',
                    off: 'container',
                },
            },
        },
        brand: {
            base: 'flex items-center gap-2',
        },
        collapse: {
            base: 'w-full md:block md:w-auto',
            list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
            hidden: {
                on: 'hidden',
                off: '',
            },
        },
        link: {
            base: 'block py-2 pl-3 pr-4 md:p-0',
            active: {
                on: 'font-semibold text-red-400 md:bg-transparent md:text-red-400',
                off: 'border-b border-transparent text-slate-300 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-red-400',
            },
            disabled: {
                on: 'text-slate-500 hover:cursor-not-allowed',
                off: '',
            },
        },
        toggle: {
            base: 'inline-flex items-center rounded-lg p-2 text-sm text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 md:hidden',
            icon: 'h-6 w-6 shrink-0',
            title: 'sr-only',
        },
    },
    button: {
        color: {
            alternative: 'border border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700 focus:ring-slate-700 hover:cursor-pointer',
            light: 'border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 focus:ring-slate-700 hover:cursor-pointer',
            red: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 hover:cursor-pointer',
            default: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 hover:cursor-pointer',
			bgless: 'bg-transparent text-shadow-white hover:bg-slate-100 focus:ring-slate-200 hover:text-red-600 hover:cursor-pointer',
			bglessOnlytext: 'bg-transparent text-shadow-white hover:text-red-600 focus:ring-slate-200 p-2 hover:cursor-pointer',
        },
    },
    card: {
        root: {
            base: 'flex rounded-2xl border border-slate-700 bg-slate-900 shadow-[0_18px_40px_rgba(0,0,0,0.35)]',
            children: 'flex h-full flex-col justify-center gap-4 p-6',
            horizontal: {
                off: 'flex-col',
                on: 'flex-col md:max-w-xl md:flex-row',
            },
            href: 'hover:bg-slate-800',
        },
        img: {
            base: '',
            horizontal: {
                off: 'rounded-t-lg',
                on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
            },
        },
    },
    accordion: {
        root: {
            base: 'divide-y divide-slate-700 border-slate-700',
            flush: {
                off: 'rounded-2xl border',
                on: 'border-b',
            },
        },
        content: {
            base: 'bg-slate-900 p-5 first:rounded-t-lg last:rounded-b-lg',
        },
        title: {
            arrow: {
                base: 'h-6 w-6 shrink-0',
                open: {
                    off: '',
                    on: 'rotate-180',
                },
            },
            base: 'flex w-full items-center justify-between p-5 text-left font-medium text-slate-300 first:rounded-t-lg last:rounded-b-lg',
            flush: {
                off: 'hover:bg-slate-800 focus:ring-4 focus:ring-slate-700',
                on: 'bg-transparent',
            },
            heading: '',
            open: {
                off: '',
                on: 'bg-slate-800 text-white',
            },
        },
    },
    blockquote: {
        root: {
            base: 'text-xl font-semibold italic text-slate-100',
        },
    },
    avatar: {
        root: {
            base: 'hover:cursor-pointer'
        }
    }
});

export default darkTheme;