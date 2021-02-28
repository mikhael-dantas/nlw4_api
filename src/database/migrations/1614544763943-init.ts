import {MigrationInterface, QueryRunner} from "typeorm";

export class init1614544763943 implements MigrationInterface {
    name = 'init1614544763943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "surveys" ("id" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1b5e3d4aaeb2321ffa98498c971" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "surveys_users" ("id" character varying NOT NULL, "user_id" character varying NOT NULL, "survey_id" character varying NOT NULL, "value" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_25f6b052fd38de792ef04ea5518" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "surveys_users" ADD CONSTRAINT "FK_aff7fa2cc60afd965ffd7fc99d6" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "surveys_users" ADD CONSTRAINT "FK_51346a475a75d7fbd85a894fa16" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "surveys_users" DROP CONSTRAINT "FK_51346a475a75d7fbd85a894fa16"`);
        await queryRunner.query(`ALTER TABLE "surveys_users" DROP CONSTRAINT "FK_aff7fa2cc60afd965ffd7fc99d6"`);
        await queryRunner.query(`DROP TABLE "surveys_users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "surveys"`);
    }

}
