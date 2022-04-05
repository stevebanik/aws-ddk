Search.setIndex({docnames:["cli/aws_ddk","core/aws_ddk_core","core/stubs/aws_ddk_core.base.BaseStack","core/stubs/aws_ddk_core.cicd.CICDPipelineStack","core/stubs/aws_ddk_core.config.Config","core/stubs/aws_ddk_core.config.JSONConfigStrategy","core/stubs/aws_ddk_core.pipelines.DataPipeline","core/stubs/aws_ddk_core.pipelines.DataStage","core/stubs/aws_ddk_core.resources.GlueFactory","core/stubs/aws_ddk_core.resources.KMSFactory","core/stubs/aws_ddk_core.resources.KinesisFirehoseFactory","core/stubs/aws_ddk_core.resources.KinesisStreamsFactory","core/stubs/aws_ddk_core.resources.LambdaFactory","core/stubs/aws_ddk_core.resources.S3Factory","core/stubs/aws_ddk_core.resources.SQSFactory","core/stubs/aws_ddk_core.resources.StepFunctionsFactory","core/stubs/aws_ddk_core.stages.AppFlowIngestionStage","core/stubs/aws_ddk_core.stages.AthenaSQLStage","core/stubs/aws_ddk_core.stages.GlueTransformStage","core/stubs/aws_ddk_core.stages.KinesisToS3Stage","core/stubs/aws_ddk_core.stages.S3EventStage","core/stubs/aws_ddk_core.stages.SqsToLambdaStage","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["cli/aws_ddk.rst","core/aws_ddk_core.rst","core/stubs/aws_ddk_core.base.BaseStack.rst","core/stubs/aws_ddk_core.cicd.CICDPipelineStack.rst","core/stubs/aws_ddk_core.config.Config.rst","core/stubs/aws_ddk_core.config.JSONConfigStrategy.rst","core/stubs/aws_ddk_core.pipelines.DataPipeline.rst","core/stubs/aws_ddk_core.pipelines.DataStage.rst","core/stubs/aws_ddk_core.resources.GlueFactory.rst","core/stubs/aws_ddk_core.resources.KMSFactory.rst","core/stubs/aws_ddk_core.resources.KinesisFirehoseFactory.rst","core/stubs/aws_ddk_core.resources.KinesisStreamsFactory.rst","core/stubs/aws_ddk_core.resources.LambdaFactory.rst","core/stubs/aws_ddk_core.resources.S3Factory.rst","core/stubs/aws_ddk_core.resources.SQSFactory.rst","core/stubs/aws_ddk_core.resources.StepFunctionsFactory.rst","core/stubs/aws_ddk_core.stages.AppFlowIngestionStage.rst","core/stubs/aws_ddk_core.stages.AthenaSQLStage.rst","core/stubs/aws_ddk_core.stages.GlueTransformStage.rst","core/stubs/aws_ddk_core.stages.KinesisToS3Stage.rst","core/stubs/aws_ddk_core.stages.S3EventStage.rst","core/stubs/aws_ddk_core.stages.SqsToLambdaStage.rst","index.rst"],objects:{"aws_ddk_core.base":[[2,0,1,"","BaseStack"]],"aws_ddk_core.base.BaseStack":[[2,1,1,"","__init__"]],"aws_ddk_core.cicd":[[3,0,1,"","CICDPipelineStack"]],"aws_ddk_core.cicd.CICDPipelineStack":[[3,1,1,"","__init__"],[3,1,1,"","add_checks"],[3,1,1,"","add_custom_stage"],[3,1,1,"","add_notifications"],[3,1,1,"","add_security_lint_stage"],[3,1,1,"","add_source_action"],[3,1,1,"","add_stage"],[3,1,1,"","add_synth_action"],[3,1,1,"","add_test_stage"],[3,1,1,"","build"],[3,1,1,"","synth"]],"aws_ddk_core.config":[[4,0,1,"","Config"],[5,0,1,"","JSONConfigStrategy"]],"aws_ddk_core.config.Config":[[4,1,1,"","__init__"],[4,1,1,"","get_cdk_version"],[4,1,1,"","get_env"],[4,1,1,"","get_env_config"],[4,1,1,"","get_resource_config"],[4,1,1,"","get_tags"]],"aws_ddk_core.config.JSONConfigStrategy":[[5,1,1,"","__init__"],[5,1,1,"","get_config"]],"aws_ddk_core.pipelines":[[6,0,1,"","DataPipeline"],[7,0,1,"","DataStage"]],"aws_ddk_core.pipelines.DataPipeline":[[6,1,1,"","__init__"],[6,1,1,"","add_notifications"],[6,1,1,"","add_rule"],[6,1,1,"","add_stage"]],"aws_ddk_core.pipelines.DataStage":[[7,1,1,"","__init__"],[7,1,1,"","add_alarm"],[7,2,1,"","cloudwatch_alarms"],[7,1,1,"","get_event_pattern"],[7,1,1,"","get_targets"]],"aws_ddk_core.resources":[[8,0,1,"","GlueFactory"],[9,0,1,"","KMSFactory"],[10,0,1,"","KinesisFirehoseFactory"],[11,0,1,"","KinesisStreamsFactory"],[12,0,1,"","LambdaFactory"],[13,0,1,"","S3Factory"],[14,0,1,"","SQSFactory"],[15,0,1,"","StepFunctionsFactory"]],"aws_ddk_core.resources.GlueFactory":[[8,1,1,"","__init__"],[8,1,1,"","job"]],"aws_ddk_core.resources.KMSFactory":[[9,1,1,"","__init__"],[9,1,1,"","key"]],"aws_ddk_core.resources.KinesisFirehoseFactory":[[10,1,1,"","__init__"],[10,1,1,"","delivery_stream"],[10,1,1,"","s3_destination"]],"aws_ddk_core.resources.KinesisStreamsFactory":[[11,1,1,"","__init__"],[11,1,1,"","data_stream"]],"aws_ddk_core.resources.LambdaFactory":[[12,1,1,"","__init__"],[12,1,1,"","function"]],"aws_ddk_core.resources.S3Factory":[[13,1,1,"","__init__"],[13,1,1,"","bucket"]],"aws_ddk_core.resources.SQSFactory":[[14,1,1,"","__init__"],[14,1,1,"","queue"]],"aws_ddk_core.resources.StepFunctionsFactory":[[15,1,1,"","__init__"],[15,1,1,"","state_machine"]],"aws_ddk_core.stages":[[16,0,1,"","AppFlowIngestionStage"],[17,0,1,"","AthenaSQLStage"],[18,0,1,"","GlueTransformStage"],[19,0,1,"","KinesisToS3Stage"],[20,0,1,"","S3EventStage"],[21,0,1,"","SqsToLambdaStage"]],"aws_ddk_core.stages.AppFlowIngestionStage":[[16,1,1,"","__init__"],[16,1,1,"","get_event_pattern"],[16,1,1,"","get_targets"]],"aws_ddk_core.stages.AthenaSQLStage":[[17,1,1,"","__init__"],[17,1,1,"","get_event_pattern"],[17,1,1,"","get_targets"]],"aws_ddk_core.stages.GlueTransformStage":[[18,1,1,"","__init__"],[18,2,1,"","crawler"],[18,1,1,"","get_event_pattern"],[18,1,1,"","get_targets"],[18,2,1,"","job"]],"aws_ddk_core.stages.KinesisToS3Stage":[[19,1,1,"","__init__"],[19,2,1,"","bucket"],[19,2,1,"","data_stream"],[19,2,1,"","delivery_stream"],[19,2,1,"","event_pattern"],[19,1,1,"","get_event_pattern"],[19,1,1,"","get_targets"]],"aws_ddk_core.stages.S3EventStage":[[20,1,1,"","__init__"],[20,2,1,"","event_pattern"],[20,1,1,"","get_event_pattern"],[20,1,1,"","get_targets"],[20,2,1,"","trail"],[20,2,1,"","trail_bucket"]],"aws_ddk_core.stages.SqsToLambdaStage":[[21,1,1,"","__init__"],[21,2,1,"","dlq"],[21,2,1,"","function"],[21,1,1,"","get_event_pattern"],[21,1,1,"","get_targets"],[21,2,1,"","queue"]],"ddk-bootstrap":[[0,3,1,"cmdoption-ddk-bootstrap-e","--environment"],[0,3,1,"cmdoption-ddk-bootstrap-i","--iam-policies"],[0,3,1,"cmdoption-ddk-bootstrap-permissions-boundary","--permissions-boundary"],[0,3,1,"cmdoption-ddk-bootstrap-prefix","--prefix"],[0,3,1,"cmdoption-ddk-bootstrap-p","--profile"],[0,3,1,"cmdoption-ddk-bootstrap-qualifier","--qualifier"],[0,3,1,"cmdoption-ddk-bootstrap-r","--region"],[0,3,1,"cmdoption-ddk-bootstrap-t","--tags"],[0,3,1,"cmdoption-ddk-bootstrap-a","--trusted-accounts"],[0,3,1,"cmdoption-ddk-bootstrap-a","-a"],[0,3,1,"cmdoption-ddk-bootstrap-e","-e"],[0,3,1,"cmdoption-ddk-bootstrap-i","-i"],[0,3,1,"cmdoption-ddk-bootstrap-p","-p"],[0,3,1,"cmdoption-ddk-bootstrap-r","-r"],[0,3,1,"cmdoption-ddk-bootstrap-t","-t"]],"ddk-create-repository":[[0,3,1,"cmdoption-ddk-create-repository-d","--description"],[0,3,1,"cmdoption-ddk-create-repository-p","--profile"],[0,3,1,"cmdoption-ddk-create-repository-r","--region"],[0,3,1,"cmdoption-ddk-create-repository-t","--tags"],[0,3,1,"cmdoption-ddk-create-repository-d","-d"],[0,3,1,"cmdoption-ddk-create-repository-p","-p"],[0,3,1,"cmdoption-ddk-create-repository-r","-r"],[0,3,1,"cmdoption-ddk-create-repository-t","-t"],[0,3,1,"cmdoption-ddk-create-repository-arg-NAME","NAME"]],"ddk-deploy":[[0,3,1,"cmdoption-ddk-deploy-f","--force"],[0,3,1,"cmdoption-ddk-deploy-o","--output-dir"],[0,3,1,"cmdoption-ddk-deploy-p","--profile"],[0,3,1,"cmdoption-ddk-deploy-require-approval","--require-approval"],[0,3,1,"cmdoption-ddk-deploy-f","-f"],[0,3,1,"cmdoption-ddk-deploy-o","-o"],[0,3,1,"cmdoption-ddk-deploy-p","-p"]],"ddk-init":[[0,3,1,"cmdoption-ddk-init-e","--environment"],[0,3,1,"cmdoption-ddk-init-generate-only","--generate-only"],[0,3,1,"cmdoption-ddk-init-t","--template"],[0,3,1,"cmdoption-ddk-init-e","-e"],[0,3,1,"cmdoption-ddk-init-t","-t"],[0,3,1,"cmdoption-ddk-init-arg-NAME","NAME"]],ddk:[[0,3,1,"cmdoption-ddk-debug","--debug"],[0,3,1,"cmdoption-ddk-debug","--no-debug"],[0,3,1,"cmdoption-ddk-version","--version"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","property","Python property"],"3":["std","cmdoption","program option"]},objtypes:{"0":"py:class","1":"py:method","2":"py:property","3":"std:cmdoption"},terms:{"1":[0,7,8,9,10,11,12,16,17,18,19,21],"10":21,"111111111111":0,"120":[12,21],"128":[10,19],"15":16,"1984":0,"2":[8,9,12],"222222222222":0,"256":[12,21],"3":[8,9,12],"30":9,"300":[10,19],"3600":[8,11],"5":[7,10,19,21],"60":[10,19],"900":[10,19],"abstract":7,"class":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"default":[0,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21],"function":[10,11,12,13,14,15,16,17,18,21],"int":[7,8,11,12,16,17,18,19,21],"new":[0,19],"public":13,"return":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"static":[8,9,10,11,12,13,14,15],"true":[0,9,10,13,19],A:[0,10,11,18,19,20,21],By:6,For:[6,7,8,9,10,11,12,13,14,15],If:[0,8,10,11,16,18,19],It:[3,20,21],The:[0,3,7,8,9,10,11,12,13,16,17,18,19,20,21],To:7,_:3,__init__:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],_queue:7,abil:3,abl:3,access:[11,13],access_control:13,account:[0,3,4],acl:13,action:3,add:[3,6,7,10,19,21],add_alarm:7,add_check:3,add_custom_stag:3,add_notif:[3,6],add_rul:6,add_security_lint_stag:3,add_source_act:3,add_stag:[3,6],add_synth_act:3,add_test_stag:3,addit:[2,3,8,9,10,11,12,13,14,15],after:[3,8,12,21],afterward:18,against:7,alarm:[7,16,17,18,19,21],alarm_comparison_oper:7,alarm_evaluation_period:7,alarm_id:7,alarm_metr:7,alarm_threshold:7,alia:[9,11],alloc:[8,12,21],allow:[8,9,10,11,12,13,14,15],allow_all_outbound:12,allow_public_subnet:12,alwai:[0,8,9,12],amazon:[2,3,8,9,10,11,12,13,14,15,19,20,21],amazons3:20,amount:[12,21],an:[6,7,11,16,17,18,19,20,21],ani:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],api:[3,8,9,10,11,12,13,14,15],app:3,appear:[10,19],appflow:16,appli:[0,11,13,14],applic:[2,3],approv:[0,3],ar:[0,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],arg:[0,2,3,6,7,16,17,18,19,20,21],argument:[0,2,8,9,12,18],arn1:0,arn2:0,arn:[0,2],artifact:3,artifactori:3,assembl:[0,3],associ:[10,20],assum:10,athena:17,attach:0,attribut:[2,3,6,7,16,17,18,19,20,21],auto_delete_object:13,automat:11,avoid:3,aw:[0,2,3,4,8,9,10,11,12,13,14,15,19,20,21],aws_appflow:16,aws_cdk:[2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],aws_cloudtrail:20,aws_cloudwatch:7,aws_codestarnotif:3,aws_ddk:22,aws_ddk_cor:22,aws_ev:[6,7,16,17,18,19,20,21],aws_glu:18,aws_glue_alpha:[8,18],aws_iam:[3,8,10,12,18,21],aws_kinesi:[10,11,19],aws_kinesisfirehos:10,aws_kinesisfirehose_alpha:[10,19],aws_kinesisfirehose_destin:10,aws_kinesisfirehose_destinations_alpha:[10,19],aws_km:[9,10,11,17,19],aws_lambda:[12,21],aws_log:[10,19],aws_s3:[10,13,19,20],aws_sn:6,aws_sq:[12,14,21],aws_stepfunct:15,aws_stepfunctions_task:17,back:10,bandit:3,base:[3,20,22],batch_siz:21,been:9,befor:[9,10,16,17,18,19,21],being:21,best:3,between:16,block:[3,13],block_public_access:13,blockpublicaccess:13,bool:[2,3,6,9,10,12,13,15,19,21],bootstrap:2,boundari:[0,2],branch:3,broaden:0,bucket:[3,10,13,14,17,19,20],bucket_nam:[13,19,20],bucket_owner_full_control:13,bucket_prop:13,bucketaccesscontrol:13,bucketencrypt:13,buffer:[10,19],buffering_interv:[10,19],buffering_s:[10,19],build:3,builder:3,call:[3,12,21],can:[3,5,11,13,21],capac:11,captur:20,catalog:17,catalog_nam:17,cd:3,cdk:[0,2,3,4,8,9,10,11,12,13,14,15],cdk_version:4,cfn:3,cfncrawler:18,cfnflow:16,chang:0,check:[3,16],choos:11,chunki:3,ci:3,cicd:22,cicdpipelin:3,cli:0,cloud:[0,3],cloud_assembly_file_set:3,cloudform:[9,11],cloudtrail:20,cloudtrail_trail:20,cloudwatch:[7,10,19],cloudwatch_alarm:7,cmk:[9,10],code:[0,3,12,21],codeartifact:3,codeartifact_domain:3,codeartifact_domain_own:3,codeartifact_repositori:3,codebuildstep:3,codecommit:3,codepipelinesourc:3,collect:18,com:[2,3,8,9,10,11,12,13,14,15,20],command:[0,3],common:[10,11,15],compar:[7,16,17,18,21],comparison:7,comparisonoper:7,complet:[8,9,10,11,12,13,14,15],compress:[10,19],config:[3,22],config_strategi:4,configstrategi:4,configur:[2,3,4,5,8,9,10,11,12,13,14,15,17],connect:[3,21],construct:[2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],constructor:3,consum:6,contain:[0,3,4,5,16,17,18],content:14,content_based_dedupl:14,continu:3,costcent:0,crawl:18,crawler:18,crawler_nam:18,crawler_rol:18,creat:[2,3,4,6,7,8,9,10,11,12,13,14,15,16,18,19,20],creation:[6,19],credenti:0,custom:[3,6,10],cw:[16,17,18,21],d:0,dai:9,data:[6,7,10,11,16,17,18,19,21,22],data_key_reus:14,data_output_prefix:[10,19],data_stream:[11,19],data_stream_en:19,databas:[17,18],database_nam:[17,18],datastag:[6,16,17,18],dd:19,ddk:[3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21],dead:21,dead_letter_queu:[12,14],dead_letter_queue_en:[12,21],deadletterqueu:[14,21],debug:0,def:7,default_argu:8,defaultstacksynthes:2,defin:[2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],delet:9,deliv:[10,19],deliveri:[3,10,19],delivery_delai:14,delivery_stream:[10,19],delivery_stream_nam:[10,19],deliverystream:10,depend:[8,9,10,11,12,13,14,15],deploi:3,deploy:0,dequeu:[14,21],describ:[7,16,17,18,19,20,21],descript:[0,6,7,8,12],destin:[10,19],destination_flow_config:16,destination_prop:10,destinationflowconfigproperti:16,destinations3backupprop:10,detail:[3,7],detail_typ:7,determin:[4,12,21],dev:[0,3],devstag:3,dict:[4,16,17,18],dictionari:[4,5],differ:5,dir:0,directori:0,dlq:[12,21],doc:[2,3,8,9,10,11,12,13,14,15,20],document:[3,8,9,10,11,12,13,14,15],domain:3,durat:[8,9,10,11,12,15,16,19,21],dure:3,e:[0,3],east:0,effect:19,enabl:[12,15,20,21],enable_key_rot:9,enable_profiling_metr:8,encrypt:[3,9,10,11,13,14,17,19],encryption_kei:[10,11,17,19],encryption_opt:17,encryptionkei:11,encryptionopt:17,enforc:[11,13],enforce_ssl:13,ensur:3,env:[3,4],env_config:4,environ:[0,2,3,4,8,9,10,11,12,13,14,15,16,17,18,19,20,21],environment_id:[2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],error:[10,19,21],error_output_prefix:[10,19],evalu:[10,19],even:0,event:[3,6,7,16,17,18,19,20,21],event_nam:20,event_pattern:[6,7,16,17,18,19,20,21],event_target:6,eventpattern:[6,7,16,17,18,19,20,21],exampl:[3,6,7],execut:[8,12,16,17,18,21],exist:6,exit:0,explicit:[8,9,12],extern:11,f:0,factori:[8,9,10,11,12,13,14,15],fail:[10,16,17,18,19],fals:[0,3,6,12,19,21],featur:3,file:[0,3,5,8,9,10,11,12,13,14,15],firehos:[10,11,19],firehose_prop:10,flow:16,flow_execution_status_check_period:16,flow_nam:16,fn:12,follow:[8,9,10,12,19],forc:0,form:4,framework:0,from:[0,2,3,4,5,7,8,9,10,12,13,14,21],front:19,function_nam:12,function_prop:12,g:[0,3],gener:[0,11],get:[4,5,7,16,17,18,19,20,21],get_cdk_vers:4,get_config:5,get_env:4,get_env_config:4,get_event_pattern:[7,16,17,18,19,20,21],get_resource_config:4,get_tag:4,get_target:[6,7,16,17,18,19,20,21],git:0,given:[4,5],glue:[8,18],grant:13,greater_than_threshold:7,group:[10,19],guid:2,gzip:[10,19],ha:9,handler:[12,21],have:[13,19],hh:19,hold:[10,19],hope:3,hour:11,how:4,html:[2,3,8,9,10,11,12,13,14,15,20],http:[2,3,8,9,10,11,12,13,14,15,20],i:0,ialarm:7,iam:[0,10],iam_polici:0,ibucket:[10,13,19,20],id:[0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],idataprocessor:10,ideliverystream:[10,19],ident:0,identifi:[2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],idestin:10,ifilesetproduc:3,ifunct:[12,21],ijob:[8,18],ikei:[9,10,11,19],ilayervers:21,iloggroup:[10,19],imetr:7,immedi:[10,19],implement:[7,20,21],implicitli:[10,19],includ:[2,3,8,9,10,11,12,13,14,15],incom:[10,19],index:22,indic:[9,10],infer:0,info:20,infrastructur:[3,7],ingest:[16,19],inherit:[2,7],input:[7,16,17,18,19,20,21],instanc:[3,4,6],integr:3,interfac:3,invoc:21,invok:[7,10,16,17,18,19,20,21],iqueu:[12,14,21],irol:[8,10,12,18,21],iruletarget:[6,7,16,17,18,19,20,21],isecurityconfigur:8,istream:[10,11],itop:6,job:[8,18],job_arg:18,job_nam:[8,18],job_prop:8,job_rol:18,jobexecut:[8,18],json:[3,4,5,8,9,10,11,12,13,14,15],jsonconfigstrategi:4,kei:[3,5,9,10,11,14,17,19,20],key_prefix:20,key_prop:9,kind:[11,13],kinesi:[10,11,19],kinesis_delivery_stream_alarm_evaluation_period:19,kinesis_delivery_stream_alarm_threshold:19,kinesis_prop:11,km:[3,9,10,11,17,19],kms_manag:14,kwarg:[2,3,6,7,16,17,18,19,20,21],lambda:[12,21],lambda_funct:21,lambda_function_errors_alarm_evaluation_period:21,lambda_function_errors_alarm_threshold:21,latest:20,layer:21,length:[10,19],letter:21,level:[2,20],link:7,lint:3,list:[0,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],load:5,loc:3,local:0,log:[0,10,19,20],log_group:[10,19],loggroup:10,machin:[15,16,17,18],main:3,manag:[0,2,9,10],manual:[0,3],manual_approv:3,master:[10,11],match:[6,7,16,17,18,19,20,21],max_concurrent_run:8,max_event_ag:12,max_message_size_byt:14,max_receive_count:21,max_retri:8,maximum:[10,15,19,21],mb:[12,21],mebibyt:[10,19],memori:[12,21],memory_s:[12,21],messag:[14,21],method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],metric:7,minimum:[10,19],mm:19,mode:11,modifi:3,modul:22,more:3,move:21,multi:2,multipl:3,must:[11,21],mutat:3,my:[3,6,7],my_glue_stag:6,my_lambda_stag:6,mypipelin:3,mystag:7,nag:3,name:[0,3,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21],need:0,never:0,next:6,non:3,none:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],notif:[3,6],notification_rul:3,notificationrul:3,notifications_top:6,number:[7,8,9,11,14,16,17,18,21],o:0,object:[10,12,16,19,20,21],off:0,one:[6,19],onli:[0,11],oper:7,option:[0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],order:[8,9,12],otherwis:[3,8,9,11,12],output:[0,6,7,16,17,18,19,20,21],output_bucket_nam:17,output_dir:0,output_object_kei:17,over:[7,16,17,18,21],overrid:[3,6,19],override_rul:6,owner:3,p:0,page:22,paramet:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],particular:11,path:5,pattern:[6,7,16,17,18,19,20,21],pending_window:9,perform:[0,10],period:[7,9,16,17,18,19,21],permiss:[0,2,10,13],permissions_boundari:0,permissions_boundary_arn:2,physic:11,pipelin:[3,22],pipeline_nam:3,polici:[0,2,3,13,14],policystat:3,possibl:3,practic:3,predefin:[8,13],preexist:[18,19,20,21],prefer:[8,9,12],prefix:[0,10,19,20],previou:6,previous_stag:6,privat:3,process:21,processor:10,produc:[3,7,16,17,18,19,20,21],profil:[0,12],project:0,properti:[3,7,8,9,10,11,12,13,14,15,16,18,19,20,21],protect:2,provid:[0,4,10,11,19],provis:11,pull:3,pytest:3,python:[0,3,8,9,10,11,12,13,14,15],python_3_9:21,qualifi:0,queri:17,query_str:17,queue:[7,12,14,21],queue_nam:14,queue_prop:14,queueencrypt:14,r:0,rai:15,read:[4,5,10],receive_message_wait_tim:14,record:[10,11,19,21],refer:[8,9,10,11,12,13,14,15],region:[0,4,11],remain:11,remov:[9,13,14],removal_polici:[9,13,14],removalpolici:[9,13,14],repo:[0,3,4,5],repositori:3,repository_nam:3,repres:[4,6,7,16,17,18,19,20,21],request:13,requir:[0,7],require_approv:0,reserved_concurrent_execut:12,resourc:[0,4,22],respect:[8,9,12],retain:[9,13,14],retention_period:[11,14],retriev:21,retry_attempt:12,reus:3,role:[0,3,8,10,12,18,21],role_policy_stat:3,root:[4,5,20],rotat:[3,9],rout:[7,16,17,18,19,20,21],rule:[3,6,7,16,17,18,19,20,21],run:[3,8,15,16,18],runtim:[12,21],s3:[10,13,17,19,20],s3_backup:10,s3_destin:10,s3_manag:13,s3bucket:10,s:[7,16,17,18,19,20,21],save:3,scm:3,scope:[2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],search:22,second:[8,10,11,12,16,19,21],secur:[0,3,8],security_configur:8,see:3,select:[7,16,17,18,19,20,21],self:[3,6,7],send:[3,14],sensit:0,sequenc:10,server:[10,11,13],servic:[9,13,14,15],set:[0,2,3,10,11,19,21],sever:3,sfn:15,sh:3,shard:11,shard_count:11,should:[0,3,4,7,9,10,13,16,17,18,19,20,21],show:0,side:[10,11,13],simpl:[13,14],singl:21,size:[10,19],skip:6,skip_rul:6,sn:[3,6],some:3,sourc:[0,3,10,12,21],source_act:3,source_flow_config:16,source_stream:10,sourceflowconfigproperti:16,specif:[0,3,6],specifi:[3,5,6,7,9,11,13,15,16,17,18,21],sq:[7,12,14,21],sql:17,sqs_queue:21,sqsfactori:7,sqsqueue:7,ssl:[3,13],stack:[0,2,3,9,13,14],stage:[3,6,7,22],stage_id:3,stage_nam:3,start:[3,17],state:[15,16,17,18],state_machin:15,state_machine_failed_executions_alarm_evaluation_period:[16,17,18],state_machine_failed_executions_alarm_threshold:[16,17,18],state_machine_input:[16,17,18],state_machine_nam:15,state_machine_prop:15,state_machine_typ:15,statemachin:15,statemachinetyp:15,statist:7,statu:16,step:[3,15,16,17,18],storag:13,store:[11,18],str:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],strategi:4,stream:[10,11,19],stream_mod:11,stream_nam:11,streamencrypt:[10,11],streammod:11,structur:[0,3,7,16,17,18,19,20,21],suppli:[11,16,18],support:[8,9,10,11,12,13,14,15],synth:3,synth_act:3,synthes:[0,2,3],system:0,t:0,tag:[0,2,4],tag_kei:4,target:[6,7,16,17,18,19,20,21],targetsproperti:18,task:16,taskproperti:16,templat:0,termin:[2,8,12,21],termination_protect:2,test:3,thei:[14,18],them:[3,7,10,16,17,18,19,20,21],thi:[2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],threshold:[7,16,17,18,19,21],through:11,time:[8,10,12,14,15,16,19,21],timeout:[8,12,15,21],topic:[3,6],trace:[12,15],tracing_en:15,track:20,trail:20,trail_bucket:20,transform:[10,18,19,21],trigger:[16,17,18,21],trust:0,trusted_account:0,turn:[0,13],type:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],unencrypt:[10,11],unsuccessfulli:[14,21],up:[0,10],url:0,us:[0,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],user:3,userguid:20,usual:6,v1:[3,10,11],v2:[2,8,9,12,13,14,15],valu:[4,7,8,9,12,19],version:[0,4,13],via:[3,6,11],virtual:0,visibility_timeout:[14,21],wait:[9,16],were:14,what:[0,7,14,16,17,18,19,20,21],when:[7,8,9,10,13,14,16,17,18,19,20,21],where:[0,4,10,19],whether:[9,13,14,15],which:[2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],wire:6,within:[2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],without:0,worker:8,worker_count:8,worker_typ:8,workertyp:8,workgroup:17,write:[10,19],x:15,you:[10,11,19],your:[0,3,10,19],yyyi:19},titles:["aws_ddk package","aws_ddk_core package","aws_ddk_core.base.BaseStack","aws_ddk_core.cicd.CICDPipelineStack","aws_ddk_core.config.Config","aws_ddk_core.config.JSONConfigStrategy","aws_ddk_core.pipelines.DataPipeline","aws_ddk_core.pipelines.DataStage","aws_ddk_core.resources.GlueFactory","aws_ddk_core.resources.KMSFactory","aws_ddk_core.resources.KinesisFirehoseFactory","aws_ddk_core.resources.KinesisStreamsFactory","aws_ddk_core.resources.LambdaFactory","aws_ddk_core.resources.S3Factory","aws_ddk_core.resources.SQSFactory","aws_ddk_core.resources.StepFunctionsFactory","aws_ddk_core.stages.AppFlowIngestionStage","aws_ddk_core.stages.AthenaSQLStage","aws_ddk_core.stages.GlueTransformStage","aws_ddk_core.stages.KinesisToS3Stage","aws_ddk_core.stages.S3EventStage","aws_ddk_core.stages.SqsToLambdaStage","AWS DDK API Documentation"],titleterms:{api:22,appflowingestionstag:16,athenasqlstag:17,aw:22,aws_ddk:0,aws_ddk_cor:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],base:[1,2],basestack:2,bootstrap:0,cicd:[1,3],cicdpipelinestack:3,config:[1,4,5],creat:0,data:1,datapipelin:6,datastag:7,ddk:[0,22],deploi:0,document:22,gluefactori:8,gluetransformstag:18,indic:22,init:0,jsonconfigstrategi:5,kinesisfirehosefactori:10,kinesisstreamsfactori:11,kinesistos3stag:19,kmsfactori:9,lambdafactori:12,packag:[0,1,22],pipelin:[1,6,7],repositori:0,resourc:[1,8,9,10,11,12,13,14,15],s3eventstag:20,s3factori:13,sqsfactori:14,sqstolambdastag:21,stage:[1,16,17,18,19,20,21],stepfunctionsfactori:15,tabl:22}})