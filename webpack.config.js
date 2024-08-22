module.exports = {
	mode: 'development', // or 'production'
	entry: '/0x01-react_intro/task_3/dashboard/public/index.html', // Adjust the path as needed
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/0x01-react_intro/task_3/dashboard/src'), // Example alias
		},
	  },
  };
  