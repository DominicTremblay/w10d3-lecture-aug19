const resolvers = {
  Query: {
    books: (root, args, context) => context.books, // here you would usually do a db query
    book: (root, args, context, info) => {
      console.log('Book Resolver');
      console.log(args);
      const result = context.books.find(book => book.id === Number(args.id));
      console.log(result);
      return result;
    },
  },
};

module.exports = {
  resolvers,
};
