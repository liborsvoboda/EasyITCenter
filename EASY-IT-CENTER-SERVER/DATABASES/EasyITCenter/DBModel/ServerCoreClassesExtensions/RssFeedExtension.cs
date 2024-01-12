namespace EasyITCenter.DBModel {

    internal static class RssFeedDefinitions {

        public class Post {
            public string Title { get; set; }
            public string UrlSlug { get; set; }
            public string Description { get; set; }
            public DateTime CreatedDate { get; set; }
        }

        internal static IEnumerable<Post> GetItemRssList() {
            var posts = new List<Post>();
            try {
                List<BasicItemList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                    IsolationLevel = IsolationLevel.ReadUncommitted
                })) { data = new EasyITCenterContext().BasicItemLists.OrderBy(a => a.Name).ToList(); }

                data.ForEach(item => {
                    posts.Add(new Post() {
                        Title = item.Name,
                        UrlSlug = item.PartNumber,
                        Description = item.Description ?? "",
                        CreatedDate = item.TimeStamp
                    });
                });
            } catch (Exception ex) { CoreOperations.SendEmail(new MailRequest() { Content = DataOperations.GetSystemErrMessage(ex) }); }
            return posts;
        }
    }
}