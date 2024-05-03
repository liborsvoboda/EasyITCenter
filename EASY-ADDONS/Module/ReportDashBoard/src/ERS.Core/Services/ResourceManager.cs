using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.Design.Serialization;

namespace ERS.Services
{
    public class Resource : IResource
    {
        public string Name { get; private set; }

        public Stream Content { get; private set; }

        public Resource(string name, Stream content)
        {
            Name = name;
            Content = content;
        }
    }


    public class ResourceManager: IResourceManager
    {

        protected readonly Assembly Assembly;
        
        public ResourceManager(): this (typeof(ResourceManager)){}

        public ResourceManager(Type type)
        {
            Assembly = type.Assembly;
        }

        public IEnumerable<IResource> GetResources(string folderName)
        {
            var path = "Resources";
            if (!string.IsNullOrEmpty(folderName)) {
                path += $".{folderName}";
            }

            var resourceNames = Assembly.GetManifestResourceNames();

            return resourceNames
                    .Where(res => res.Contains(path))
                    .Select(res => {
                        var indexToDel = res.IndexOf(path) + 1;
                        var resourceName = res.Substring(indexToDel + path.Length);

                        return new Resource(resourceName, Assembly.GetManifestResourceStream(res));
                    })
                    .ToList();
        }

        public Stream GetResourceAsStream(string resourceName)
        {

            var path = "Resources." + resourceName;
            var fullPath = Assembly.GetManifestResourceNames().FirstOrDefault(res => res.EndsWith(path));

            if (fullPath != null) {
                return Assembly.GetManifestResourceStream(fullPath);
            }

            return null;
        }

        public string GetResourceAsString(string resourceName)
        {
            var stream = GetResourceAsStream(resourceName);
            if (stream != null) {
                return new StreamReader(stream).ReadToEnd();
            }

            return null;
        }
    }

    public class ResourceManager<T> : ResourceManager
    {
        public ResourceManager(): base(typeof(T)) { }
    }
}
