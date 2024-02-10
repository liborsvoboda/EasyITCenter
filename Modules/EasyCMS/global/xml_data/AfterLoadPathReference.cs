﻿using System.Xml;

namespace Elanat.XmlData
{
    public class AfterLoadPathReference
    {
        public void SetTagToList(string TagName, List<string> AttributeName = null, List<string> AttributeValue = null)
        {
            XmlDocument doc = new XmlDocument();
            doc.Load(StaticObject.ServerMapPath(StaticObject.SitePath + "App_Data/after_load_path_reference_list/after_load_path_reference.xml"));

            XmlElement Tag = doc.CreateElement(TagName);
            for (int i = 0; i < AttributeName.Count; i++)
                Tag.SetAttribute(AttributeName[i], AttributeValue[i]);

            doc.SelectSingleNode("after_load_path_reference_root/after_load_path_reference_list").AppendChild(Tag);

            doc.Save(StaticObject.ServerMapPath(StaticObject.SitePath + "App_Data/after_load_path_reference_list/after_load_path_reference.xml"));


            // Set Static Object
            StaticObject.ApplicationStart();


            // Add Reference
            ReferenceClass rc = new ReferenceClass();
            rc.StartEvent("add_tag_to_after_load_path_reference_xml", TagName);
        }

        public void SetTextTagToList(string FullTag)
        {
            var Lines = File.OpenText(StaticObject.ServerMapPath(StaticObject.SitePath + "App_Data/after_load_path_reference_list/after_load_path_reference.xml"));
            string XmlText = Lines.ReadToEnd();
            Lines.Close();

            XmlText = XmlText.Replace("</after_load_path_reference_list>", FullTag + Environment.NewLine + "</after_load_path_reference_list>");

            File.WriteAllText(StaticObject.ServerMapPath(StaticObject.SitePath + "App_Data/after_load_path_reference_list/after_load_path_reference.xml"), XmlText);


            // Set Static Object
            StaticObject.ApplicationStart();


            // Add Reference
            ReferenceClass rc = new ReferenceClass();
            rc.StartEvent("add_tag_to_after_load_path_reference_xml", FullTag);
        }
    }
}