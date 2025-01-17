﻿using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookshop.Migration.Scripts
{
    //[Migration(dd-mm-yyyy-hh-ii)]
    [Migration(110120231827)]
    public class AddLogTable : FluentMigrator.Migration
    {
        public override void Up()
        {
            
                Create.Table("Log")
                    .WithColumn("Id").AsInt64().PrimaryKey().Identity()
                    .WithColumn("Text").AsString();
            
        }

        public override void Down()
        {
                Delete.Table("Log");
            
        }
    }
}
