﻿namespace ProjectManagement.Models.ViewModels {

    public class NewCommentViewModel {
        public int CommentId { get; set; }
        public int TaskId { get; set; }
        public int ProjectId { get; set; }
        public int UserId { get; set; }
        public string ByUserName { get; set; }
        public string ProjectName { get; set; }
    }
}