﻿using Microsoft.AspNetCore.Http;

namespace DBEntitySchema.Core {

    public class DBEntitySchemaOptions {
        private PathString pathMatch = "/DBEntitySchema";

        public PathString PathMatch {
            get { return pathMatch; }
            set { pathMatch = value; }
        }
    }
}