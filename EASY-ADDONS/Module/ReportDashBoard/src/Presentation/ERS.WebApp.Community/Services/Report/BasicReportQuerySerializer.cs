using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using Newtonsoft.Json;

using ERS.Models;

namespace ERS.Services
{
    public class BasicReportQuerySerializer
    {
        private readonly IReportQuery _query;

        public BasicReportQuerySerializer(IReportQuery query)
        {
            _query = query;
        }

        public static string Serialize(IReportQuery query)
        {
            return (new BasicReportQuerySerializer(query)).SerializeToJsonString();
        }

        public static void Deserialize(IReportQuery query, string json)
        {
            (new BasicReportQuerySerializer(query)).DeserializeFromJsonString(json);
        }

        public string SerializeToJsonString()
        {
            var result = new StringBuilder(1000);
            using (var textWriter = new StringWriter(result))
            using (var jsonWriter = new JsonTextWriter(textWriter)) {
                WriteToJson(jsonWriter);
            }

            return result.ToString();
        }

        protected void WriteToJson(JsonWriter writer)
        {
            writer.WriteStartObject();
            WritePropertiesToJson(writer);
            writer.WriteEndObject();
        }

        protected virtual void WritePropertiesToJson(JsonWriter writer)
        {
            writer.WritePropertyName("id");
            writer.WriteValue(_query.Id);

            writer.WritePropertyName("modelId");
            writer.WriteValue(_query.ModelId);

            writer.WritePropertyName("name");
            writer.WriteValueAsync(_query.Name);

            writer.WritePropertyName("desc");
            writer.WriteValue(_query.Description);

            writer.WritePropertyName("sql");
            writer.WriteValue(_query.SQL);
        }

        public void DeserializeFromJsonString(string json)
        {
            using (var textReader = new StringReader(json))
            using (var jsonReader = new JsonTextReader(textReader)) {
                jsonReader.Read();
                ReadFromJson(jsonReader);
            }
        }

        protected void ReadFromJson(JsonReader reader)
        {
            if (reader.TokenType != JsonToken.StartObject) {
                throw new BadImageFormatException(reader.Path);
            }

            while (reader.Read() && reader.TokenType != JsonToken.EndObject) {
                var propName = reader.Value.ToString();
                ReadOnePropFromJson(reader, propName);
            }
        }

        protected virtual void ReadOnePropFromJson(JsonReader reader, string propName)
        {
            switch (propName) {
                case "id":
                    _query.Id = reader.ReadAsString();
                    break;
                case "modelId":
                    _query.ModelId = reader.ReadAsString();
                    break;
                case "name":
                    _query.Name = reader.ReadAsString();
                    break;
                case "desc":
                    _query.Description = reader.ReadAsString();
                    break;
                case "sql":
                    _query.SQL = reader.ReadAsString();
                    break;
                default:
                    reader.Skip();
                    break;
            }
        }
    }
}
