﻿using EasyGitServer.Repositories;
using LibGit2Sharp;

namespace EasyGitServer.Models
{
	public class BlobModel : FileViewModel<Blob>
	{
		public bool IsBinary => Object.IsBinary;

		public string Content => Object.GetContentText();
		public long Size => Repository.ObjectDatabase.RetrieveObjectMetadata(Object.Id).Size;

		public BlobModel(Repository repo, string path, string name, Blob obj) : base(repo, path, name, obj) { }
	}
}
