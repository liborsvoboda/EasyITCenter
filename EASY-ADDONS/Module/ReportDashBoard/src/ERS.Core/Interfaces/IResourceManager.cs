using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace ERS.Services
{

    public interface IResource
    { 
        string Name { get; }
        Stream Content { get; }
    }


    public interface IResourceManager
    {
        IEnumerable<IResource> GetResources(string folderName);

        Stream GetResourceAsStream(string resourceName);

        string GetResourceAsString(string resourceName);
    }
}
